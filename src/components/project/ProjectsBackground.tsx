"use client";

import dynamic from "next/dynamic";
import { useReducedMotion, motion } from "framer-motion";

const ProjectsScene3D = dynamic(() => import("./projectsscene3d"), {
  ssr: false,
  loading: () => null,
});

export default function ProjectsBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Signature element: floating wireframe geometry, rendered client-only */}
      <div className="absolute inset-0">
        <ProjectsScene3D />
      </div>

      {/* Subdued ambient glow — kept quiet so the 3D shapes read as the focal point */}
      <motion.div
        aria-hidden
        className="absolute right-0 top-0 h-[28rem] w-[28rem] translate-x-1/3 rounded-full bg-blue-500/10 blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                x: [0, -30, 15, 0],
                y: [0, 20, -15, 0],
                opacity: [0.5, 0.75, 0.4, 0.5],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-1/4 left-0 h-96 w-96 -translate-x-1/3 rounded-full bg-violet-500/[0.06] blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 35, -15, 0],
                y: [0, -25, 15, 0],
                opacity: [0.4, 0.65, 0.3, 0.4],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Faint grid for ground-plane depth cue behind the floating shapes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_45%_35%_at_50%_0%,black_30%,transparent_100%)]" />

      {/* Fine grain noise overlay for texture (static) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
