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

// Mouse Spotlight & Tilt
function MouseSpotlight() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const { mouse, camera } = state;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.04);
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
      intensity={3.2}
      color="#3b82f6"
      distance={14}
    />
  );
}

type GeometryKind = "icosahedron" | "octahedron" | "box" | "torus";

interface ShapeConfig {
  position: [number, number, number];
  scale: number;
  color: string;
  geometry: GeometryKind;
  speed: number;
  floatIntensity: number;
}

const SHAPES: ShapeConfig[] = [
  {
    position: [-6.5, 2.6, -6],
    scale: 0.65,
    color: "#3b82f6",
    geometry: "icosahedron",
    speed: 0.15,
    floatIntensity: 1.2,
  },
  {
    position: [6.8, -2.2, -7],
    scale: 0.8,
    color: "#8b5cf6",
    geometry: "octahedron",
    speed: 0.1,
    floatIntensity: 1.6,
  },
  {
    position: [6.2, 3.1, -6.5],
    scale: 0.5,
    color: "#22d3ee",
    geometry: "box",
    speed: 0.2,
    floatIntensity: 1,
  },
  {
    position: [-6.8, -3, -6.2],
    scale: 0.6,
    color: "#3b82f6",
    geometry: "torus",
    speed: 0.12,
    floatIntensity: 1.4,
  },
  {
    position: [0.5, 3.6, -8],
    scale: 0.45,
    color: "#8b5cf6",
    geometry: "icosahedron",
    speed: 0.25,
    floatIntensity: 0.9,
  },
];

function Shape({
  position,
  scale,
  color,
  geometry,
  speed,
  floatIntensity,
  reduced,
}: ShapeConfig & { reduced: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const effectiveSpeed = reduced ? 0 : speed;
  const effectiveFloat = reduced ? 0 : floatIntensity;

  useFrame((_, delta) => {
    if (!meshRef.current || reduced) return;
    meshRef.current.rotation.x += delta * effectiveSpeed;
    meshRef.current.rotation.y += delta * effectiveSpeed * 0.7;
  });

  const geometryNode = useMemo(() => {
    switch (geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "box":
        return <boxGeometry args={[1.3, 1.3, 1.3]} />;
      case "torus":
        return <torusGeometry args={[1, 0.35, 8, 24]} />;
    }
  }, [geometry]);

  return (
    <Float
      speed={1.1}
      floatIntensity={effectiveFloat}
      rotationIntensity={reduced ? 0 : 0.35}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometryNode}
        <meshBasicMaterial color={color} wireframe transparent opacity={0.25} />
      </mesh>
    </Float>
  );
}

// Particle Constellation Layer
function ProjectParticles() {
  const COUNT = 180;

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (pseudoRandom(i * 3 + 400) - 0.5) * 22;
      arr[i * 3 + 1] = (pseudoRandom(i * 3 + 401) - 0.5) * 14;
      arr[i * 3 + 2] = -1 - pseudoRandom(i * 3 + 402) * 7;
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
        size={0.035}
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export default function ProjectsScene3D() {
  const reduced = useReducedMotionPref();

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 11], fov: 38 }}
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 4, 3]} intensity={1.5} color="#3b82f6" />
        <pointLight position={[-5, -4, 3]} intensity={1.5} color="#8b5cf6" />
        <MouseSpotlight />
        {SHAPES.map((shape, i) => (
          <Shape key={i} {...shape} reduced={reduced} />
        ))}
        <ProjectParticles />
      </Suspense>
    </Canvas>
  );
}
