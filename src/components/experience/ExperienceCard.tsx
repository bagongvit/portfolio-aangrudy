"use client";

import { useRef, useState } from "react";
import { Calendar, MapPin, ChevronDown } from "lucide-react";
import MotionWrapper from "@/components/hero/MotionWrapper";
import TiltCard from "@/components/ui/TiltCard";

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  index: number;
  current?: boolean;
}

const VISIBLE_RESPONSIBILITIES = 3;
const MAX_VISIBLE_TAGS = 6;

function companyInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function ExperienceCard({
  company,
  position,
  period,
  location,
  description,
  responsibilities,
  technologies,
  index,
  current = false,
}: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false });
  const [expanded, setExpanded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  const hasOverflow = responsibilities.length > VISIBLE_RESPONSIBILITIES;
  const visibleResponsibilities = expanded
    ? responsibilities
    : responsibilities.slice(0, VISIBLE_RESPONSIBILITIES);

  const visibleTags = technologies.slice(0, MAX_VISIBLE_TAGS);
  const hiddenTagCount = technologies.length - visibleTags.length;

  return (
    <MotionWrapper delay={index * 0.05} className="h-full">
      <div className="group/edge h-full rounded-[18px] bg-gradient-to-br from-white/10 via-white/5 to-transparent p-px transition-colors duration-500 hover:from-blue-500/50 hover:via-violet-500/15 hover:to-transparent">
        <TiltCard intensity={8} className="h-full">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setSpot((s) => ({ ...s, active: false }))}
            className="
            group relative h-full overflow-hidden rounded-[17px]
            bg-zinc-950/80 p-6 backdrop-blur transition-all
            duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10
          "
          >
            {/* Cursor spotlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 transition-opacity duration-500"
              style={{
                opacity: spot.active ? 1 : 0,
                background: `radial-gradient(360px circle at ${spot.x}% ${spot.y}%, rgba(59,130,246,0.10), transparent 65%)`,
              }}
            />

            {/* Corner Glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/0 blur-3xl transition-colors duration-500 group-hover:bg-blue-500/10" />

            {/* Header */}
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                {/* Company avatar */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 font-mono text-sm font-semibold text-blue-300">
                  {companyInitials(company)}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {position}
                    </h3>
                    {current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-medium text-blue-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        Present
                      </span>
                    )}
                  </div>

                  <p className="mt-1.5 inline-flex items-center gap-2 font-medium text-blue-400">
                    {company}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-1.5 text-sm text-zinc-400 sm:items-end">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} className="text-zinc-500" />
                  {period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-zinc-500" />
                  {location}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="relative mt-6 leading-7 text-zinc-400">
              {description}
            </p>

            {/* Responsibilities */}
            <ul className="relative mt-6 space-y-3">
              {visibleResponsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-zinc-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>

            {hasOverflow && (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="relative mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
              >
                {expanded
                  ? "Show less"
                  : `View ${responsibilities.length - VISIBLE_RESPONSIBILITIES} more`}
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                />
              </button>
            )}

            {/* Divider */}
            <div className="relative my-6 h-px w-full bg-gradient-to-r from-white/10 via-white/10 to-transparent" />

            {/* Technology */}
            <div className="relative flex flex-wrap gap-2">
              {visibleTags.map((tech) => (
                <span
                  key={tech}
                  className="
                  rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1
                  text-xs font-medium text-blue-300 transition-colors duration-300
                  group-hover:border-blue-500/40 group-hover:bg-blue-500/15
                "
                >
                  {tech}
                </span>
              ))}
              {hiddenTagCount > 0 && (
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-400">
                  +{hiddenTagCount}
                </span>
              )}
            </div>
          </div>
        </TiltCard>
      </div>
    </MotionWrapper>
  );
}
