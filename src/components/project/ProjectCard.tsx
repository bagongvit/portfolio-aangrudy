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
  return (
    <MotionWrapper delay={index * 0.1} className="h-full">
      <TiltCard intensity={8} className="h-full">
        <article
          className="
        group relative flex h-full flex-col overflow-hidden rounded-3xl
        border border-white/10 bg-white/[0.03] backdrop-blur transition-all
        duration-300 hover:-translate-y-2 hover:border-blue-500/40
        hover:shadow-xl hover:shadow-blue-500/10
      "
        >
          {/* Image — clickable to open detail */}
          <button
            onClick={onOpenDetail}
            className="relative aspect-video w-full overflow-hidden bg-zinc-900 text-left"
            aria-label={`View details for ${title}`}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/0 to-zinc-950/0" />

            {/* Expand hint overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/0 opacity-0 transition-all duration-300 group-hover:bg-zinc-950/40 group-hover:opacity-100">
              <span className="flex items-center gap-2 rounded-full border border-white/20 bg-zinc-950/60 px-4 py-2 text-xs font-medium text-white backdrop-blur">
                <Maximize2 size={13} />
                View Details
              </span>
            </div>

            {/* Floating quick-action links */}
            <div
              className="absolute right-4 top-4 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href={github}
                target="_blank"
                aria-label="View code on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-white backdrop-blur transition-colors hover:border-blue-500/50 hover:text-blue-400"
              >
                <FaGithub size={15} />
              </Link>
              <Link
                href={demo}
                target="_blank"
                aria-label="View live demo"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-white backdrop-blur transition-colors hover:border-blue-500/50 hover:text-blue-400"
              >
                <ExternalLink size={15} />
              </Link>
            </div>
          </button>

          {/* Content */}
          <div className="flex flex-1 flex-col p-6">
            <button
              onClick={onOpenDetail}
              className="text-left text-2xl font-bold text-white transition-colors duration-300 hover:text-blue-400"
            >
              {title}
            </button>

            <p className="mt-4 leading-7 text-zinc-400">{description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {technologies.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 transition-colors duration-300 hover:border-blue-500/40 hover:bg-blue-500/15"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <div className="flex gap-3">
                <button
                  onClick={onOpenDetail}
                  className="group/btn relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                  <Maximize2 size={16} />
                  View Details
                </button>

                <Link
                  href={github}
                  target="_blank"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-blue-500/50 hover:bg-white/5"
                >
                  <FaGithub size={16} />
                  Code
                </Link>
              </div>
            </div>
          </div>
        </article>
      </TiltCard>
    </MotionWrapper>
  );
}
