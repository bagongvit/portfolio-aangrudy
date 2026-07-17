import { Calendar, MapPin } from "lucide-react";
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
}: ExperienceCardProps) {
  return (
    <MotionWrapper delay={index * 0.05} className="h-full">
      <TiltCard intensity={8} className="h-full">
        <div
          className="
        group relative h-full overflow-hidden rounded-2xl border
        border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all
        duration-300 hover:-translate-y-2 hover:border-blue-500/40
        hover:shadow-xl hover:shadow-blue-500/10
      "
        >
          {/* Corner Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/0 blur-3xl transition-colors duration-500 group-hover:bg-blue-500/10" />

          {/* Header */}
          <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">{position}</h3>

              <p className="mt-2 inline-flex items-center gap-2 font-medium text-blue-400">
                {company}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-1.5 text-sm text-zinc-400 md:items-end">
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
          <p className="relative mt-6 leading-7 text-zinc-400">{description}</p>

          {/* Responsibilities */}
          <ul className="relative mt-6 space-y-3">
            {responsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-zinc-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="relative my-6 h-px w-full bg-gradient-to-r from-white/10 via-white/10 to-transparent" />

          {/* Technology */}
          <div className="relative flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1
                text-xs font-medium text-blue-300 transition-colors duration-300
                hover:border-blue-500/40 hover:bg-blue-500/15
              "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </MotionWrapper>
  );
}
