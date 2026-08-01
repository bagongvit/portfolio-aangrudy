"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Layers, Briefcase, Cpu, Sparkles } from "lucide-react";
import TechIcon from "@/components/ui/TechIcon";
import type { Tech } from "@/data/tech";

interface TechDetailModalProps {
  tech: Tech | null;
  onClose: () => void;
}

export default function TechDetailModal({ tech, onClose }: TechDetailModalProps) {
  useEffect(() => {
    if (!tech) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [tech, onClose]);

  return (
    <AnimatePresence>
      {tech && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-zinc-950/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/90"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close detail modal"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-white backdrop-blur transition-colors hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              <X size={18} />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-8">
              {/* Header section with Tech Icon & Experience Meter */}
              <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 shadow-lg shadow-cyan-500/10">
                    <TechIcon name={tech.name} />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-0.5 text-[10px] uppercase tracking-widest text-cyan-300">
                      <Sparkles size={11} />
                      {tech.category}
                    </span>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {tech.name}
                    </h3>
                  </div>
                </div>

                {/* Circular Meter Badge */}
                <div className="flex flex-col items-center">
                  <div className="relative flex h-16 w-16 items-center justify-center">
                    <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-white/10"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-cyan-400 transition-all duration-1000"
                        strokeDasharray={`${tech.experience}, 100`}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono text-xs font-bold text-white">
                      {tech.experience}%
                    </span>
                  </div>
                  <span className="mt-1 text-[10px] uppercase tracking-wider text-zinc-400">
                    Mastery Level
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  <Cpu size={15} className="text-cyan-400" />
                  Overview
                </h4>
                <p className="mt-2 leading-relaxed text-zinc-300">
                  {tech.description}
                </p>
              </div>

              {/* Masteries */}
              <div className="mt-8">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  Core Competencies &amp; Skills
                </h4>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-1">
                  {tech.masteries.map((m) => (
                    <li
                      key={m}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs leading-relaxed text-zinc-200"
                    >
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-400" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects Used In */}
              <div className="mt-8">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  <Briefcase size={15} className="text-violet-400" />
                  Applied In Projects
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tech.projectsUsed.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300"
                    >
                      <Layers size={12} />
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
