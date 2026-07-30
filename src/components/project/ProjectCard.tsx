"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Maximize2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import MotionWrapper from "@/components/hero/MotionWrapper";
import type { Project } from "@/data/projects";
import TiltCard from "@/components/ui/TiltCard";

interface ProjectCardProps extends Project {
  index: number;
  onOpenDetail: () => void;
}

const MAX_VISIBLE_TAGS = 4;

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  demo,
  github,
  index,
  onOpenDetail,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  const visibleTags = technologies.slice(0, MAX_VISIBLE_TAGS);
  const hiddenCount = technologies.length - visibleTags.length;

  return (
    <MotionWrapper delay={index * 0.1} className="h-full">
      {/* Gradient border wrapper: 1px gradient edge that brightens on hover */}
      <div className="group/edge h-full rounded-[26px] bg-gradient-to-br from-white/10 via-white/5 to-transparent p-px transition-colors duration-500 hover:from-blue-500/50 hover:via-violet-500/20 hover:to-transparent">
        <TiltCard intensity={8} className="h-full">
          <article
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setSpot((s) => ({ ...s, active: false }))}
            className="
          group relative flex h-full flex-col overflow-hidden rounded-[25px]
          bg-zinc-950/80 backdrop-blur transition-all
          duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10
        "
          >
            {/* Cursor-tracking spotlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
              style={{
                opacity: spot.active ? 1 : 0,
                background: `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, rgba(59,130,246,0.12), transparent 65%)`,
              }}
            />

            {/* Image — clickable to open detail */}
            <button
              onClick={onOpenDetail}
              className="relative aspect-video w-full shrink-0 overflow-hidden bg-zinc-900 text-left"
              aria-label={`Lihat detail ${title}`}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent opacity-90" />

              {/* Expand hint overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-zinc-950/50 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">
                <span className="flex translate-y-2 items-center gap-2 rounded-full border border-white/20 bg-zinc-950/70 px-4 py-2 text-xs font-medium tracking-wide text-white shadow-lg backdrop-blur transition-transform duration-300 group-hover:translate-y-0">
                  <Maximize2 size={13} />
                  Lihat Detail
                </span>
              </div>

              {/* Index badge */}
              <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-zinc-950/70 px-2.5 py-1 font-mono text-[10px] tracking-widest text-zinc-400 backdrop-blur">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Floating quick-action links */}
              <div
                className="absolute right-4 top-4 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                onClick={(e) => e.stopPropagation()}
              >
                <Link
                  href={github}
                  target="_blank"
                  aria-label="Lihat kode di GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-white backdrop-blur transition-colors hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <FaGithub size={15} />
                </Link>
                <Link
                  href={demo}
                  target="_blank"
                  aria-label="Lihat demo langsung"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-white backdrop-blur transition-colors hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <ExternalLink size={15} />
                </Link>
              </div>
            </button>

            {/* Content */}
            <div className="relative z-20 flex flex-1 flex-col p-6">
              <button
                onClick={onOpenDetail}
                className="text-left text-xl font-bold leading-snug text-white transition-colors duration-300 hover:text-blue-400 sm:text-2xl"
              >
                {title}
              </button>

              <p className="mt-3 line-clamp-3 text-[15px] leading-6 text-zinc-400">
                {description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {visibleTags.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1 text-xs font-medium text-blue-300 transition-colors duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/15"
                  >
                    {item}
                  </span>
                ))}
                {hiddenCount > 0 && (
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-400">
                    +{hiddenCount}
                  </span>
                )}
              </div>

              <div className="mt-auto pt-7">
                <div className="flex gap-3">
                  <button
                    onClick={onOpenDetail}
                    className="group/btn relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                    <Maximize2 size={16} />
                    Detail
                  </button>

                  <Link
                    href={github}
                    target="_blank"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-blue-500/50 hover:bg-white/5 active:scale-[0.98]"
                  >
                    <FaGithub size={16} />
                    Kode
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </TiltCard>
      </div>
    </MotionWrapper>
  );
}
