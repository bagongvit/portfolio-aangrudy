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

// Interactive Spotlight tracking mouse
function MouseSpotlight() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const { mouse, camera } = state;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.3, 0.03);
    camera.lookAt(0, 0, 0);

    if (lightRef.current) {
      lightRef.current.position.x = THREE.MathUtils.lerp(
        lightRef.current.position.x,
        mouse.x * 5,
        0.06,
      );
      lightRef.current.position.y = THREE.MathUtils.lerp(
        lightRef.current.position.y,
        mouse.y * 3,
        0.06,
      );
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, 5]}
      intensity={3}
      color="#3b82f6"
      distance={12}
    />
  );
}

// 3D Floating Geometries (Dodecahedron, Octahedron, Icosahedron)
function FloatingGeometries({ reduced }: { reduced: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const shapes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      type: i % 3 === 0 ? "dodecahedron" : i % 3 === 1 ? "octahedron" : "icosahedron",
      x: (pseudoRandom(i * 4 + 10) - 0.5) * 14,
      y: (pseudoRandom(i * 4 + 11) - 0.5) * 8,
      z: -2 - pseudoRandom(i * 4 + 12) * 5,
      scale: 0.25 + pseudoRandom(i * 4 + 13) * 0.45,
      color: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#22d3ee",
      speed: 0.15 + pseudoRandom(i * 4 + 14) * 0.4,
    }));
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || reduced) return;
    groupRef.current.children.forEach((child, i) => {
      const s = shapes[i];
      if (s) {
        child.rotation.x += delta * s.speed;
        child.rotation.y += delta * s.speed * 0.8;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {shapes.map((s, i) => (
        <Float key={i} speed={1.2} floatIntensity={reduced ? 0 : 1}>
          <mesh position={[s.x, s.y, s.z]} scale={s.scale}>
            {s.type === "dodecahedron" && <dodecahedronGeometry args={[1, 0]} />}
            {s.type === "octahedron" && <octahedronGeometry args={[1, 0]} />}
            {s.type === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
            <meshBasicMaterial
              color={s.color}
              wireframe
              transparent
              opacity={0.25}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Particle Mist Background
function ParticleMist() {
  const COUNT = 160;

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (pseudoRandom(i * 3 + 300) - 0.5) * 20;
      arr[i * 3 + 1] = (pseudoRandom(i * 3 + 301) - 0.5) * 12;
      arr[i * 3 + 2] = -1 - pseudoRandom(i * 3 + 302) * 6;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.01;
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
        color="#818cf8"
        size={0.035}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export default function AboutScene3D() {
  const reduced = useReducedMotionPref();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Dynamic Radial Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_50%)]" />

      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 7], fov: 42 }}
        style={{ pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 4, 3]} intensity={1.2} color="#60a5fa" />
          <pointLight position={[-5, -4, 3]} intensity={1.2} color="#c084fc" />
          <MouseSpotlight />
          <FloatingGeometries reduced={reduced} />
          <ParticleMist />
        </Suspense>
      </Canvas>

      {/* Top & Bottom Fade Overlays */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#09090B] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#09090B] to-transparent pointer-events-none" />
    </div>
  );
}
