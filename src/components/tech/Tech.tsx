"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";
import { techData, type Tech as TechType } from "@/data/tech";
import TechScene3D from "./TechScene3D";
import TechPod from "./TechPod";
import TechDetailModal from "./TechDetailModal";
import TechMarquee from "./TechMarquee";
import { Cpu, Layers, Server, Code, Database, Terminal } from "lucide-react";

type CategoryFilter = "All" | "Backend" | "Frontend" | "Database & Tools" | "DevOps";

const CATEGORIES: { label: CategoryFilter; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
  { label: "All", icon: Layers },
  { label: "Backend", icon: Server },
  { label: "Frontend", icon: Code },
  { label: "Database & Tools", icon: Database },
  { label: "DevOps", icon: Terminal },
];

export default function Tech() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [selectedTech, setSelectedTech] = useState<TechType | null>(null);

  const filteredTech =
    selectedCategory === "All"
      ? techData
      : techData.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="tech"
      aria-labelledby="tech-heading"
      className="relative overflow-hidden py-28 md:py-36 scroll-mt-24"
    >
      {/* 3D Orbit & Beam Scene Background */}
      <TechScene3D />

      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md shadow-lg shadow-cyan-500/10">
            <Cpu size={14} className="text-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Tech Stack &amp; Ecosystem
            </span>
          </div>

          <h2
            id="tech-heading"
            className="mt-6 bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl"
          >
            Technologies I Master &amp; Build With
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Enterprise frameworks, modern client libraries, cloud databases, and DevOps tools engineered for high-performance software applications.
          </p>

          {/* Quick Metrics Badge Row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-3 backdrop-blur">
              <span className="font-mono text-3xl font-extrabold text-cyan-400">
                {techData.length}+
              </span>
              <p className="mt-0.5 text-[11px] uppercase tracking-wider text-zinc-400">
                Core Technologies
              </p>
            </div>

            <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden sm:block" />

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-3 backdrop-blur">
              <span className="font-mono text-3xl font-extrabold text-violet-400">
                100%
              </span>
              <p className="mt-0.5 text-[11px] uppercase tracking-wider text-zinc-400">
                Production Ready
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map(({ label, icon: Icon }) => {
            const isActive = selectedCategory === label;
            return (
              <button
                key={label}
                onClick={() => setSelectedCategory(label)}
                className={`group relative flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "border border-cyan-400/40 bg-cyan-500/15 text-white shadow-lg shadow-cyan-500/20"
                    : "border border-white/10 bg-zinc-950/60 text-zinc-400 hover:border-white/20 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon
                  size={14}
                  className={`transition-colors ${
                    isActive ? "text-cyan-400" : "text-zinc-500 group-hover:text-cyan-300"
                  }`}
                />
                <span>{label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 -z-10 rounded-2xl border border-cyan-400/50 bg-cyan-500/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Holographic Tech Matrix Grid */}
        <div className="mt-12">
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch"
          >
            <AnimatePresence mode="popLayout">
              {filteredTech.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <TechPod
                    tech={tech}
                    index={index}
                    onSelect={(t) => setSelectedTech(t)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>

      {/* Infinite Running Marquee Strip */}
      <div className="mt-20">
        <TechMarquee />
      </div>

      {/* Interactive Detail Drawer Modal */}
      <TechDetailModal
        tech={selectedTech}
        onClose={() => setSelectedTech(null)}
      />
    </section>
  );
}
