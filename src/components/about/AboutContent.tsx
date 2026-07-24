import { Code2, Sparkles, Users, Layers } from "lucide-react";
import MotionWrapper from "@/components/hero/MotionWrapper";

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: "Full Stack Expertise",
    description:
      "End-to-end development from database to UI, with clean architecture.",
  },
  {
    icon: Sparkles,
    title: "Modern Tech Stack",
    description:
      "Laravel, Next.js, React, and TypeScript for scalable applications.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "Collaborative approach, clear communication, on-time delivery.",
  },
];

export default function AboutContent() {
  return (
    <MotionWrapper>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
        <Code2 size={14} />
        About Me
      </span>

      <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
        Building digital experiences with{" "}
        <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          clean and modern
        </span>{" "}
        solutions.
      </h2>

      <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-400">
        <p>
          I am <span className="font-medium text-white">Aang Rudy</span>, a Full
          Stack Developer who enjoys creating modern web applications with great
          user experience and solid architecture.
        </p>

        <p>
          My main focus is building scalable applications using{" "}
          <span className="font-medium text-zinc-200">Laravel</span>,{" "}
          <span className="font-medium text-zinc-200">Next.js</span>,{" "}
          <span className="font-medium text-zinc-200">React</span>, and{" "}
          <span className="font-medium text-zinc-200">TypeScript</span>, along
          with modern development practices.
        </p>

        <p>
          I believe great software is not only about code, but also about
          solving real problems with simple, efficient, and maintainable
          solutions.
        </p>
      </div>

      {/* Decorative accent line */}
      <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

      {/* Highlight cards — memecah paragraf panjang jadi poin yang mudah di-scan */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {HIGHLIGHTS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.05]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500/20">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </MotionWrapper>
  );
}
