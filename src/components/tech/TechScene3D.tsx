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

// Interactive Spotlight following mouse cursor
function MouseSpotlight() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const { mouse, camera } = state;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.4, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.3, 0.04);
    camera.lookAt(0, 0, 0);

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
      intensity={3}
      color="#06b6d4"
      distance={14}
    />
  );
}

// 3D Orbital Tech Orbit Rings with Rotating Beacons
function TechOrbitRings({ reduced }: { reduced: boolean }) {
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (reduced) return;
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.12;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.16;
  });

  return (
    <group position={[0, 0, -4]}>
      {/* Outer Orbit */}
      <group ref={ring1Ref}>
        <mesh>
          <torusGeometry args={[5.5, 0.015, 16, 120]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.3} />
        </mesh>
        <mesh position={[5.5, 0, 0]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshBasicMaterial color="#22d3ee" />
        </mesh>
      </group>

      {/* Inner Orbit */}
      <group ref={ring2Ref} rotation={[0.4, 0.3, 0]}>
        <mesh>
          <torusGeometry args={[4.2, 0.02, 16, 100]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.35} />
        </mesh>
        <mesh position={[-4.2, 0, 0]}>
          <sphereGeometry args={[0.1, 12, 12]} />
          <meshBasicMaterial color="#60a5fa" />
        </mesh>
      </group>
    </group>
  );
}

// Floating Tech Cube Nodes with glowing wireframes
function FloatingTechCubes({ reduced }: { reduced: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const cubes = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      x: (pseudoRandom(i * 4 + 40) - 0.5) * 16,
      y: (pseudoRandom(i * 4 + 41) - 0.5) * 10,
      z: -1 - pseudoRandom(i * 4 + 42) * 5,
      size: 0.3 + pseudoRandom(i * 4 + 43) * 0.4,
      color: i % 3 === 0 ? "#06b6d4" : i % 3 === 1 ? "#3b82f6" : "#8b5cf6",
      speed: 0.2 + pseudoRandom(i * 4 + 44) * 0.4,
    }));
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || reduced) return;
    groupRef.current.children.forEach((child, i) => {
      const c = cubes[i];
      if (c) {
        child.rotation.x += delta * c.speed;
        child.rotation.y += delta * c.speed * 0.8;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {cubes.map((c, i) => (
        <Float key={i} speed={1.4} floatIntensity={reduced ? 0 : 0.8}>
          <mesh position={[c.x, c.y, c.z]} scale={c.size}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial
              color={c.color}
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Particle Field
function TechParticleField() {
  const COUNT = 200;

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (pseudoRandom(i * 3 + 500) - 0.5) * 22;
      arr[i * 3 + 1] = (pseudoRandom(i * 3 + 501) - 0.5) * 14;
      arr[i * 3 + 2] = -1 - pseudoRandom(i * 3 + 502) * 7;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.012;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#38bdf8"
        size={0.035}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function TechScene3D() {
  const reduced = useReducedMotionPref();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Cyan & Indigo Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_60%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.14),transparent_50%)]" />

      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 7], fov: 42 }}
        style={{ pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 4, 3]} intensity={1.5} color="#22d3ee" />
          <pointLight position={[-5, -4, 3]} intensity={1.5} color="#8b5cf6" />
          <MouseSpotlight />
          <TechOrbitRings reduced={reduced} />
          <FloatingTechCubes reduced={reduced} />
          <TechParticleField />
        </Suspense>
      </Canvas>

      {/* Edge Gradient Fades */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#09090B] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#09090B] to-transparent pointer-events-none" />
    </div>
  );
}
