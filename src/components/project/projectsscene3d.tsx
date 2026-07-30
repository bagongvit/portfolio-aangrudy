"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

type GeometryKind = "icosahedron" | "octahedron" | "box" | "torus";

interface ShapeConfig {
  position: [number, number, number];
  scale: number;
  color: string;
  geometry: GeometryKind;
  speed: number;
  floatIntensity: number;
}

// Scattered at different depths (z) so they read with real parallax,
// colors pulled from the site's existing blue/violet/cyan accent palette.
const SHAPES: ShapeConfig[] = [
  {
    position: [-4.2, 1.6, -2],
    scale: 1.1,
    color: "#3b82f6",
    geometry: "icosahedron",
    speed: 0.15,
    floatIntensity: 1.2,
  },
  {
    position: [4.3, -1.1, -3.2],
    scale: 1.5,
    color: "#8b5cf6",
    geometry: "octahedron",
    speed: 0.1,
    floatIntensity: 1.6,
  },
  {
    position: [2.6, 2.1, -1],
    scale: 0.7,
    color: "#22d3ee",
    geometry: "box",
    speed: 0.2,
    floatIntensity: 1,
  },
  {
    position: [-3.2, -2.2, -1.6],
    scale: 0.95,
    color: "#3b82f6",
    geometry: "torus",
    speed: 0.12,
    floatIntensity: 1.4,
  },
  {
    position: [0.6, -2.7, -2.6],
    scale: 0.6,
    color: "#8b5cf6",
    geometry: "icosahedron",
    speed: 0.25,
    floatIntensity: 0.9,
  },
];

function useReducedMotionPref() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

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
        <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

export default function ProjectsScene3D() {
  const reduced = useReducedMotionPref();

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        {SHAPES.map((shape, i) => (
          <Shape key={i} {...shape} reduced={reduced} />
        ))}
      </Suspense>
    </Canvas>
  );
}
