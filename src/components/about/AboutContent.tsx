import { Code2 } from "lucide-react";
import MotionWrapper from "@/components/hero/MotionWrapper";

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
    </MotionWrapper>
  );
}
