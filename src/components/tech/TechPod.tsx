"use client";

import { motion } from "framer-motion";
import MotionWrapper from "@/components/hero/MotionWrapper";
import Spotlight from "@/components/ui/Spotlight";
import TechIcon from "@/components/ui/TechIcon";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import type { Tech } from "@/data/tech";

interface TechPodProps {
  tech: Tech;
  index: number;
  onSelect: (tech: Tech) => void;
}

export default function TechPod({ tech, index, onSelect }: TechPodProps) {
  return (
    <MotionWrapper delay={index * 0.06} className="group h-full">
      <Spotlight opacity={0.2} size={450} className="h-full">
        <div
          onClick={() => onSelect(tech)}
          className="relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
        >
          {/* Top Edge Glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transition-all duration-500 group-hover:via-cyan-400" />
          
          {/* Subtle Ambient Radial Glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-500 group-hover:bg-cyan-500/25" />

          <div>
            {/* Header: Tech Icon + Circular Progress Meter */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                <TechIcon name={tech.name} />
              </div>

              {/* Circular SVG Gauge Meter */}
              <div className="relative flex h-12 w-12 items-center justify-center">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/10"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className="text-cyan-400"
                    strokeWidth="3"
                    strokeDasharray={`${tech.experience}, 100`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    initial={{ strokeDasharray: "0, 100" }}
                    whileInView={{ strokeDasharray: `${tech.experience}, 100` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </svg>
                <span className="absolute font-mono text-[11px] font-bold text-white">
                  {tech.experience}%
                </span>
              </div>
            </div>

            {/* Category Tag */}
            <div className="mt-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-cyan-300">
                <Sparkles size={10} />
                {tech.category}
              </span>
              <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400">
                <ShieldCheck size={12} />
                Ready
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="mt-4 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
              {tech.name}
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-zinc-400 line-clamp-3">
              {tech.description}
            </p>
          </div>

          {/* Bottom Action Trigger */}
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold text-cyan-400 transition-colors group-hover:text-white">
            <span>Inspect Blueprint</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-white">
              <ArrowRight size={13} />
            </div>
          </div>
        </div>
      </Spotlight>
    </MotionWrapper>
  );
}
