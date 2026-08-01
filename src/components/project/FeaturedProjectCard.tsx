"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Maximize2, Sparkles, Calendar, User } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";
import MotionWrapper from "@/components/hero/MotionWrapper";

interface FeaturedProjectCardProps {
  project: Project;
  onOpenDetail: () => void;
}

export default function FeaturedProjectCard({
  project,
  onOpenDetail,
}: FeaturedProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  return (
    <MotionWrapper delay={0.05} className="w-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setSpot((s) => ({ ...s, active: false }))}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 p-1 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-blue-500/10"
      >
        {/* Spotlight cursor glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            opacity: spot.active ? 1 : 0,
            background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, rgba(59,130,246,0.15), transparent 70%)`,
          }}
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Image Column */}
          <div className="lg:col-span-7">
            <button
              onClick={onOpenDetail}
              className="group/img relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900 text-left"
              aria-label={`View details for ${project.title}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

              {/* Featured Badge */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-300 backdrop-blur-md shadow-lg shadow-blue-500/20">
                <Sparkles size={13} className="animate-pulse text-blue-400" />
                <span>Featured Project</span>
              </div>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover/img:bg-zinc-950/40 group-hover/img:opacity-100 group-hover/img:backdrop-blur-[2px]">
                <span className="flex translate-y-2 items-center gap-2 rounded-full border border-white/20 bg-zinc-950/80 px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-xl backdrop-blur transition-transform duration-300 group-hover/img:translate-y-0">
                  <Maximize2 size={14} />
                  Inspect Case Study
                </span>
              </div>
            </button>
          </div>

          {/* Content Column */}
          <div className="flex flex-col justify-between p-6 lg:col-span-5 lg:p-8 lg:pl-0">
            <div>
              {/* Meta tags */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-400">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-blue-300">
                  <Calendar size={13} className="text-blue-400" />
                  {project.year}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-300">
                  <User size={13} className="text-blue-400" />
                  {project.role}
                </span>
              </div>

              {/* Title */}
              <h3
                onClick={onOpenDetail}
                className="mt-4 cursor-pointer text-2xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-blue-400 sm:text-3xl"
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-zinc-300 line-clamp-3 sm:text-base">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={onOpenDetail}
                className="group/btn relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/35 active:scale-[0.98] sm:flex-none"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                <Maximize2 size={16} />
                Full Case Study
              </button>

              <Link
                href={project.github}
                target="_blank"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 active:scale-[0.98] sm:flex-none"
              >
                <FaGithub size={16} />
                Code
              </Link>

              <Link
                href={project.demo}
                target="_blank"
                className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-white transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 hover:text-blue-400"
                title="Live Demo"
              >
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}
