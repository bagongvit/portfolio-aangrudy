"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function useReducedMotionPref() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      queueMicrotask(() => setReduced(true));
    }

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

// 3D Parallax & Dynamic Mouse Spotlight
function MouseSpotlight() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const { mouse, camera } = state;

    // Smoothly tilt camera based on mouse position
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.6, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.4, 0.04);
    camera.lookAt(0, 0, 0);

    // Dynamic point light tracks cursor
    if (lightRef.current) {
      lightRef.current.position.x = THREE.MathUtils.lerp(
        lightRef.current.position.x,
        mouse.x * 6,
        0.08,
      );
      lightRef.current.position.y = THREE.MathUtils.lerp(
        lightRef.current.position.y,
        mouse.y * 4,
        0.08,
      );
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, 4]}
      intensity={3.5}
      color="#3b82f6"
      distance={14}
    />
  );
}

// Animated Cyber Grid Floor with Light Pulses
function CyberGrid({ reduced }: { reduced: boolean }) {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (!gridRef.current || reduced) return;
    const t = state.clock.getElapsedTime();
    gridRef.current.position.z = (t * 0.8) % 1;
  });

  return (
    <group position={[0, -3.2, -2]} rotation={[Math.PI / 3.2, 0, 0]}>
      <gridHelper
        ref={gridRef}
        args={[30, 30, "#3b82f6", "#1e293b"]}
        position={[0, 0, 0]}
      />
    </group>
  );
}

// Concentric Energy Rings behind Contact Cards
function EnergyRings({ reduced }: { reduced: boolean }) {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (reduced) return;
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.15;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.2;
    if (ring3Ref.current) ring3Ref.current.rotation.z += delta * 0.1;
  });

  return (
    <group position={[0, 0, -4]}>
      {/* Outer Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[5.2, 0.018, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.35} />
      </mesh>

      {/* Middle Ring */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[4.2, 0.025, 16, 80]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.4} />
      </mesh>

      {/* Inner Ring */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.2, 0.02, 16, 60]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

// Floating Glowing Orbs & Beacons
function FloatingNodes({ reduced }: { reduced: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      x: (pseudoRandom(i * 5 + 1) - 0.5) * 16,
      y: (pseudoRandom(i * 5 + 2) - 0.5) * 10,
      z: -2 - pseudoRandom(i * 5 + 3) * 6,
      scale: 0.15 + pseudoRandom(i * 5 + 4) * 0.35,
      color: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#06b6d4",
      speed: 0.2 + pseudoRandom(i * 5 + 5) * 0.5,
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current || reduced) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      const node = nodes[i];
      if (node) {
        child.position.y = node.y + Math.sin(t * node.speed + i) * 0.4;
        child.rotation.x = t * node.speed * 0.5;
        child.rotation.y = t * node.speed * 0.7;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((n, i) => (
        <Float key={i} speed={1.5} floatIntensity={reduced ? 0 : 0.8}>
          <mesh position={[n.x, n.y, n.z]} scale={n.scale}>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial
              color={n.color}
              wireframe
              transparent
              opacity={0.35}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Particle Constellation Swarm
function ConstellationParticles() {
  const PARTICLE_COUNT = 180;

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = (pseudoRandom(i * 3 + 200) - 0.5) * 22;
      arr[i * 3 + 1] = (pseudoRandom(i * 3 + 201) - 0.5) * 14;
      arr[i * 3 + 2] = -1 - pseudoRandom(i * 3 + 202) * 8;
    }
    return arr;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#60a5fa"
        size={0.04}
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

export default function ContactScene3D() {
  const reduced = useReducedMotionPref();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Radiant Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.18),transparent_50%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.12),transparent_50%)]" />

      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 7], fov: 45 }}
        style={{ pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[-6, 4, 3]} intensity={1.5} color="#8b5cf6" />
          <pointLight position={[6, -4, 3]} intensity={1.5} color="#06b6d4" />
          <MouseSpotlight />
          <CyberGrid reduced={reduced} />
          <EnergyRings reduced={reduced} />
          <FloatingNodes reduced={reduced} />
          <ConstellationParticles />
        </Suspense>
      </Canvas>

      {/* Cyber Grid Lines & Glowing Edge Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09090B] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#09090B] to-transparent pointer-events-none" />
    </div>
  );
}
