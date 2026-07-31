"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "@/data/experience";

const ExperienceScene3D = dynamic(() => import("./Experiencescene3d"), {
  ssr: false,
  loading: () => null,
});

function isCurrent(period: string) {
  return /present|sekarang|current|now/i.test(period);
}

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Signature element: floating wireframe geometry, rendered client-only */}
        <div className="absolute inset-0">
          <ExperienceScene3D />
        </div>

        {/* Subdued ambient glow, kept quiet so the 3D shapes lead */}
        <motion.div
          aria-hidden
          className="absolute left-0 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-3xl"
          animate={
            reduce
              ? undefined
              : {
                  x: [0, 30, -15, 0],
                  y: [0, -20, 15, 0],
                  opacity: [0.4, 0.65, 0.3, 0.4],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-violet-500/[0.04] blur-3xl"
          animate={
            reduce
              ? undefined
              : {
                  x: [0, -25, 15, 0],
                  y: [0, 20, -15, 0],
                  opacity: [0.3, 0.55, 0.2, 0.3],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Faint grid for ground-plane depth cue */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_55%_45%_at_0%_30%,black_35%,transparent_100%)]" />

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

      <Container>
        {/* Title */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Experience
          </span>

          <h2 className="mt-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
            My Journey
          </h2>

          <p className="mt-6 text-balance text-lg leading-8 text-zinc-400">
            My experience building applications, learning technologies, and
            solving real-world problems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 space-y-8">
          {/* Line track (static, faint) */}
          <div className="absolute left-4 top-2 hidden h-[calc(100%-2rem)] w-px bg-white/[0.06] md:block" />

          {/* Line fill — draws in as the section scrolls into view */}
          <motion.div
            className="absolute left-4 top-2 hidden w-px origin-top bg-gradient-to-b from-blue-500 via-blue-500/40 to-transparent md:block"
            style={{ height: "calc(100% - 2rem)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {experienceData.map((item, index) => {
            const current = isCurrent(item.period);
            return (
              <div key={item.company} className="group relative md:pl-12">
                {/* Dot */}
                <div className="absolute left-0 top-8 hidden h-8 w-8 items-center justify-center md:flex">
                  {current && !reduce && (
                    <span className="absolute inline-flex h-8 w-8 animate-ping rounded-full bg-blue-500/30" />
                  )}
                  <div
                    className={`relative flex h-8 w-8 items-center justify-center rounded-full border bg-zinc-950 transition-all duration-300 group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.15)] ${
                      current
                        ? "border-blue-500"
                        : "border-blue-500/40 group-hover:border-blue-500"
                    }`}
                  >
                    <div
                      className={`h-3 w-3 rounded-full transition-transform duration-300 group-hover:scale-125 ${
                        current ? "bg-blue-400" : "bg-blue-500"
                      }`}
                    />
                  </div>
                </div>

                <ExperienceCard {...item} index={index} current={current} />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
