import Container from "@/components/layout/Container";
import TechCard from "./TechCard";
import { techData } from "@/data/tech";
import TechMarquee from "./TechMarquee";

export default function Tech() {
  return (
    <section id="tech" className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-mesh absolute left-1/4 top-0 h-96 w-96 -translate-y-1/3 rounded-full bg-blue-500/10 blur-3xl" />
        <div
          className="animate-mesh absolute right-1/4 bottom-0 h-80 w-80 translate-y-1/3 rounded-full bg-violet-500/5 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Tech Stack
          </span>

          <h2 className="mt-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-6 text-balance text-lg leading-8 text-zinc-400">
            Tools and technologies that I use to build modern, scalable, and
            maintainable applications.
          </p>
        </div>
      </Container>

      {/* Marquee — full width, outside Container so it can bleed to screen edges */}
      <TechMarquee />

      <Container>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techData.map((tech, index) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              category={tech.category}
              description={tech.description}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
