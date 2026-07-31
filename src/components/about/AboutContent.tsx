import { Code2, MapPin, Zap } from "lucide-react";
import MotionWrapper from "@/components/hero/MotionWrapper";

export default function AboutContent() {
  return (
    <MotionWrapper className="flex h-full flex-col justify-between">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            <Code2 size={14} />
            About Me
          </span>

          {/* Live Location Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <MapPin size={13} />
            Indonesia (UTC+7)
          </span>
        </div>

        <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          Building high-performance software with{" "}
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
            clean &amp; modern
          </span>{" "}
          solutions.
        </h2>

        <div className="mt-6 space-y-4 text-base leading-7 text-zinc-400 md:text-lg">
          <p>
            I am <span className="font-semibold text-white">Aang Rudy</span>, a{" "}
            <span className="font-semibold text-blue-400">Software Engineer</span> who
            specializes in architecting web applications with high performance, scalability,
            and robust code quality.
          </p>

          <p>
            My main stack spans across{" "}
            <span className="font-medium text-zinc-200">Laravel</span>,{" "}
            <span className="font-medium text-zinc-200">Next.js</span>,{" "}
            <span className="font-medium text-zinc-200">React</span>, and{" "}
            <span className="font-medium text-zinc-200">TypeScript</span> — enabling me to engineer end-to-end solutions from secure backend APIs to smooth, responsive user interfaces.
          </p>
        </div>
      </div>

      {/* Decorative accent bar */}
      <div className="mt-8 flex items-center gap-2">
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
        <Zap size={14} className="text-violet-400" />
      </div>
    </MotionWrapper>
  );
}
