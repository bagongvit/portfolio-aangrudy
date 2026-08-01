import { profile } from "@/data/profile";
import HeroBadge from "./HeroBadge";
import MotionWrapper from "./MotionWrapper";
import AnimatedText from "./AnimatedText";
import { Code2, CheckCircle2, Sparkles } from "lucide-react";

const QUICK_STACK = [
  "Laravel",
  "Vue.js",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
];

const METRICS = [
  { label: "Years Exp", value: "3+" },
  { label: "Production Apps", value: "10+" },
  { label: "Architecture", value: "Clean & Scalable" },
];

export default function HeroContent() {
  return (
    <MotionWrapper>
      <HeroBadge />

      <p className="mt-4 text-base font-semibold tracking-wide text-blue-400">
        Hello, I&apos;m
      </p>

      <h1 className="mt-1 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
        <AnimatedText
          text={profile.name}
          delay={1.6}
          className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm"
        />
      </h1>

      <h2 className="mt-2 flex items-center gap-3 text-lg font-semibold text-blue-300 sm:text-xl lg:text-2xl">
        <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-transparent lg:w-10" />
        {profile.role}
      </h2>

      <p className="mt-4 max-w-xl text-balance text-sm leading-7 text-zinc-300 sm:text-base">
        {profile.description}
      </p>

      {/* Quick Tech Chips */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1 font-mono text-xs text-zinc-400 mr-1">
          <Code2 size={13} className="text-cyan-400" />
          Primary Stack:
        </span>
        {QUICK_STACK.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 font-mono text-[11px] text-cyan-300 transition-colors hover:border-cyan-400/40 hover:bg-cyan-500/15"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Live Impact Metrics Ribbon */}
      <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-white/10 pt-4">
        {METRICS.map(({ label, value }) => (
          <div key={label} className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-cyan-400 shadow-inner">
              {label.includes("Arch") ? (
                <CheckCircle2 size={15} className="text-emerald-400" />
              ) : (
                <Sparkles size={15} className="text-blue-400" />
              )}
            </div>
            <div>
              <span className="font-mono text-base font-bold text-white leading-none block">
                {value}
              </span>
              <p className="text-[10px] uppercase tracking-wider text-zinc-400 mt-0.5">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MotionWrapper>
  );
}
