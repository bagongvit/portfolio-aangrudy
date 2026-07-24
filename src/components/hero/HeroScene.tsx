"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Html, Environment, Sphere } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

interface TechConfig {
  label: string;
  color: string;
  angle: number;
  radius: number;
  bobOffset: number;
}

const TECH_STACK: TechConfig[] = [
  { label: "Laravel", color: "#f87171", angle: -90, radius: 1.9, bobOffset: 0 },
  { label: "Vue.js", color: "#4ade80", angle: -30, radius: 1.9, bobOffset: 1 },
  { label: "Next.js", color: "#e5e7eb", angle: 30, radius: 1.9, bobOffset: 2 },
  { label: "React", color: "#38bdf8", angle: 90, radius: 1.9, bobOffset: 3 },
  {
    label: "TypeScript",
    color: "#60a5fa",
    angle: 150,
    radius: 1.9,
    bobOffset: 4,
  },
  { label: "Node.js", color: "#86efac", angle: 210, radius: 1.9, bobOffset: 5 },
];

function DataPulse({ config }: { config: TechConfig }) {
  const ref = useRef<THREE.Mesh>(null);
  const target = useMemo(() => {
    const rad = (config.angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * config.radius,
      y: Math.sin(rad) * config.radius * 0.85,
    };
  }, [config.angle, config.radius]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const cycle = 2.2;
    const t =
      ((clock.getElapsedTime() * 0.6 + config.bobOffset * 0.35) % cycle) /
      cycle;
    ref.current.position.x = target.x * t;
    ref.current.position.y = target.y * t;
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = Math.sin(t * Math.PI) * 0.9;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.045, 8, 8]} />
      <meshBasicMaterial color={config.color} transparent opacity={0} />
    </mesh>
  );
}

function TechSatellite({ config }: { config: TechConfig }) {
  const ref = useRef<THREE.Group>(null);
  const basePosition = useMemo(() => {
    const rad = (config.angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * config.radius,
      y: Math.sin(rad) * config.radius * 0.85,
    };
  }, [config.angle, config.radius]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const bob =
      Math.sin(clock.getElapsedTime() * 0.8 + config.bobOffset) * 0.08;
    ref.current.position.x = basePosition.x;
    ref.current.position.y = basePosition.y + bob;
    ref.current.position.z = 0;
  });

  return (
    <group ref={ref}>
      <Sphere args={[0.08, 16, 16]}>
        <meshStandardMaterial
          color={config.color}
          emissive={config.color}
          emissiveIntensity={1.4}
        />
      </Sphere>
      <mesh>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshBasicMaterial color={config.color} transparent opacity={0.15} />
      </mesh>

      <Html
        center
        distanceFactor={9}
        occlude={false}
        style={{ pointerEvents: "none" }}
        transform
        sprite
      >
        <div
          className="flex items-center gap-1.5 whitespace-nowrap rounded-lg border px-2.5 py-1.5 backdrop-blur-md shadow-lg transition-all"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            borderColor: `${config.color}55`,
            boxShadow: `0 0 18px ${config.color}30, inset 0 0 12px ${config.color}10`,
          }}
        >
          <span
            className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full"
            style={{ backgroundColor: config.color }}
          />
          <span className="text-[11px] font-medium text-white/95">
            {config.label}
          </span>
        </div>
      </Html>
    </group>
  );
}

function ConnectorLine({ config }: { config: TechConfig }) {
  const points = useMemo(() => {
    const rad = (config.angle * Math.PI) / 180;
    const x = Math.cos(rad) * config.radius;
    const y = Math.sin(rad) * config.radius * 0.85;
    return [
      [0, 0, 0],
      [x, y, 0],
    ] as [number, number, number][];
  }, [config.angle, config.radius]);

  return (
    <Line
      points={points}
      color={config.color}
      transparent
      opacity={0.3}
      dashed
      dashScale={3}
      dashSize={0.15}
      gapSize={0.12}
    />
  );
}

function DecorativeRing({
  radius,
  opacity = 0.12,
  speed = 0,
}: {
  radius: number;
  opacity?: number;
  speed?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i <= 128; i++) {
      const t = (i / 128) * Math.PI * 2;
      pts.push([Math.cos(t) * radius, Math.sin(t) * radius * 0.85, 0]);
    }
    return pts;
  }, [radius]);

  useFrame((_, delta) => {
    if (ref.current && speed) ref.current.rotation.z += delta * speed;
  });

  return (
    <group ref={ref}>
      <Line
        points={points}
        color="#3b82f6"
        transparent
        opacity={opacity}
        dashed
        dashScale={4}
        dashSize={0.3}
        gapSize={0.25}
      />
    </group>
  );
}

function AmbientParticles() {
  const groupRef = useRef<THREE.Group>(null);
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, () => ({
        x: (Math.random() - 0.5) * 6,
        y: (Math.random() - 0.5) * 5,
        z: (Math.random() - 0.5) * 3 - 1,
        speed: 0.3 + Math.random() * 0.4,
        offset: Math.random() * Math.PI * 2,
        size: 0.015 + Math.random() * 0.02,
      })),
    [],
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      const p = particles[i];
      child.position.y =
        p.y + Math.sin(clock.getElapsedTime() * p.speed + p.offset) * 0.3;
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.size, 6, 6]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function CentralPulse() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = (clock.getElapsedTime() * 0.5) % 1;
    const scale = 0.5 + t * 1.3;
    ref.current.scale.set(scale, scale, scale);
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = (1 - t) * 0.35;
  });

  return (
    <mesh ref={ref} rotation={[0, 0, 0]}>
      <ringGeometry args={[0.9, 0.95, 64]} />
      <meshBasicMaterial
        color="#60a5fa"
        transparent
        opacity={0}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function NetworkScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(Date.now() * 0.00015) * 0.05;
    }
  });

  return (
    // PERBAIKAN: position={[0, 0.45, 0]} menggeser seluruh scene (orbit + garis + partikel)
    // naik ke atas sebesar 0.45 unit. Naikkan angka ini kalau ingin lebih ke atas lagi.
    <group ref={groupRef} position={[0, 0.45, 0]}>
      <AmbientParticles />
      <DecorativeRing radius={1.9} speed={0.02} />
      <DecorativeRing radius={2.15} opacity={0.08} speed={-0.015} />
      <CentralPulse />
      {TECH_STACK.map((config) => (
        <ConnectorLine key={`line-${config.label}`} config={config} />
      ))}
      {TECH_STACK.map((config) => (
        <DataPulse key={`pulse-${config.label}`} config={config} />
      ))}
      {TECH_STACK.map((config) => (
        <TechSatellite key={config.label} config={config} />
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[52%] lg:block">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 40 }}
        className="h-full w-full"
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 6, 6]} intensity={1.1} />
        <directionalLight
          position={[-5, 2, -2]}
          intensity={0.7}
          color="#93c5fd"
        />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <NetworkScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
