"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const COLORS = ["#3b82f6", "#06b6d4", "#8b5cf6", "#60a5fa"];
const NODE_COUNT = 34;
const STAR_COUNT = 320;
const CONNECTION_DISTANCE = 2.2;

function useReducedMotion() {
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

function MouseParallax() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.4,
      0.03,
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.25,
      0.03,
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function AmbientStars() {
  const positions = useMemo(() => {
    const arr = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 24;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = -Math.random() * 16;
    }

    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y = state.clock.elapsedTime * 0.01;
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
        color="#c4b5fd"
        size={0.03}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

type NodeData = {
  base: THREE.Vector3;
  phase: number;
  speed: number;
  amp: number;
};

function PremiumNetwork({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const lines = useRef<THREE.LineSegments>(null);
  const nodesRef = useRef<THREE.Points>(null);

  const nodes = useMemo<NodeData[]>(() => {
    return Array.from({ length: NODE_COUNT }, () => ({
      base: new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        -1 - Math.random() * 4,
      ),
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.8,
      amp: 0.15 + Math.random() * 0.25,
    }));
  }, []);

  const pointPositions = useMemo(() => new Float32Array(NODE_COUNT * 3), []);

  const pointColors = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3);

    for (let i = 0; i < NODE_COUNT; i++) {
      const c = new THREE.Color(COLORS[i % COLORS.length]);
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }

    return arr;
  }, []);

  const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (group.current && !reduced) {
      group.current.rotation.y += delta * 0.03;
      group.current.rotation.x = Math.sin(t * 0.25) * 0.05;
    }

    const positions: THREE.Vector3[] = [];

    nodes.forEach((n, i) => {
      const x = n.base.x + Math.sin(t * n.speed + n.phase) * n.amp;
      const y = n.base.y + Math.cos(t * (n.speed * 0.9) + n.phase) * n.amp;
      const z = n.base.z + Math.sin(t * 0.4 + n.phase) * 0.12;

      positions.push(new THREE.Vector3(x, y, z));

      pointPositions[i * 3] = x;
      pointPositions[i * 3 + 1] = y;
      pointPositions[i * 3 + 2] = z;
    });

    if (nodesRef.current) {
      const attr = nodesRef.current.geometry.attributes
        .position as THREE.BufferAttribute;
      attr.needsUpdate = true;
    }

    const lineArray: number[] = [];

    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const d = positions[i].distanceTo(positions[j]);

        if (d < CONNECTION_DISTANCE) {
          lineArray.push(
            positions[i].x,
            positions[i].y,
            positions[i].z,
            positions[j].x,
            positions[j].y,
            positions[j].z,
          );
        }
      }
    }

    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(lineArray, 3),
    );

    if (lines.current) {
      const mat = lines.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.14 + Math.sin(t * 1.5) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <lineSegments ref={lines} geometry={lineGeometry}>
        <lineBasicMaterial color="#60a5fa" transparent opacity={0.16} />
      </lineSegments>

      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
          />

          <bufferAttribute
            attach="attributes-color"
            args={[pointColors, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.11}
          vertexColors
          transparent
          opacity={0.95}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#93c5fd"
          size={0.22}
          transparent
          opacity={0.18}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}

function CameraDrift() {
  const { camera } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    camera.position.z = 8 + Math.sin(t * 0.2) * 0.15;
  });

  return null;
}

export default function ExperienceScene3D() {
  const reduced = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_35%)]" />

      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <CameraDrift />
          <MouseParallax />
          <AmbientStars />
          <PremiumNetwork reduced={reduced} />

          <fog attach="fog" args={["#030712", 8, 18]} />

          <ambientLight intensity={0.35} />
          <pointLight position={[5, 3, 5]} intensity={1.2} color="#60a5fa" />
          <pointLight position={[-5, -3, 4]} intensity={0.9} color="#8b5cf6" />
        </Suspense>
      </Canvas>
    </div>
  );
}
