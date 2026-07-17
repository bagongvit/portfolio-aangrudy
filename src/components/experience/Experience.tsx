import Container from "@/components/layout/Container";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-mesh absolute left-0 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div
          className="animate-mesh absolute right-0 bottom-0 h-80 w-80 translate-x-1/3 rounded-full bg-violet-500/5 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      <Container>
        {/* Title */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Experience
          </span>

          <h2 className="mt-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
            My Journey
          </h2>

          <p className="mt-6 text-balance text-lg leading-8 text-zinc-400">
            My experience building applications, learning technologies, and
            solving real-world problems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 space-y-8">
          {/* Line */}
          <div className="absolute left-4 top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent md:block" />

          {experienceData.map((item, index) => (
            <div
              key={item.company}
              className="group relative md:pl-12"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Dot */}
              <div className="absolute left-0 top-8 hidden h-8 w-8 items-center justify-center rounded-full border border-blue-500/40 bg-zinc-950 transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.15)] md:flex">
                <div className="h-3 w-3 rounded-full bg-blue-500 transition-transform duration-300 group-hover:scale-125" />
              </div>

              <ExperienceCard {...item} index={index} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
