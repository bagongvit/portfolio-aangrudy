"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/data/projects";
import { Sparkles } from "lucide-react";

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    set.add("All");
    projects.forEach((p) => {
      if (p.role) set.add(p.role);
    });
    return Array.from(set);
  }, [projects]);

  const featuredProject = projects[0];
  const gridProjects = useMemo(() => {
    if (activeCategory === "All") return projects.slice(1);
    return projects.filter((p) => p.role === activeCategory);
  }, [projects, activeCategory]);

  return (
    <>
      {/* Category Filter Tabs with Sliding Pill Animation */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:bg-white/10 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg shadow-blue-500/25"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
          <Sparkles size={13} className="text-blue-400" />
          <span>Interactive Showcase</span>
        </div>
      </div>

      {/* Featured Hero Project (Only shown when "All" tab is active) */}
      {activeCategory === "All" && featuredProject && (
        <div className="mt-10">
          <FeaturedProjectCard
            project={featuredProject}
            onOpenDetail={() => setSelected(featuredProject)}
          />
        </div>
      )}

      {/* Remaining Projects Grid */}
      <motion.div layout className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {gridProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <ProjectCard
                {...project}
                index={index + (activeCategory === "All" ? 1 : 0)}
                onOpenDetail={() => setSelected(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
