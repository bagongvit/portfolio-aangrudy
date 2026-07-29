import Container from "@/components/layout/Container";
import FloatingTechIcons from "@/components/ui/FloatingTechIcons";
import Glow from "@/components/ui/Glow";
import { techData } from "@/data/tech";
import TechCard from "./TechCard";
import TechMarquee from "./TechMarquee";

export default function Tech() {
  return (
    <section
      id="tech"
      aria-labelledby="tech-heading"
      className="relative overflow-hidden py-28 scroll-mt-24"
    >
      {/* Background accent — ringan, menggantikan AuroraBackground yang
          sebelumnya dobel-render (sudah global di layout.tsx) */}
      <Glow color="cyan" size="lg" className="-left-20 -top-20" />
      <Glow color="violet" size="md" className="-right-10 bottom-0" />

      {/* Floating Icons */}
      <FloatingTechIcons />

      <Container>
        <div className="mx-auto max-w-3xl text-center ">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/5 px-5 py-2 backdrop-blur-md">
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_15px_rgb(96_165_250)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
              Tech Stack
            </span>
          </div>

          {/* Title */}
          <h2
            id="tech-heading"
            className="mt-8 bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl"
          >
            Technologies I Work With
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Modern frameworks, cloud platforms, backend technologies and tools
            that I use to build scalable, high-performance and maintainable
            applications.
          </p>

          {/* Counter */}
          <div className="mt-10 flex justify-center gap-12">
            <div>
              <h3 className="text-4xl font-bold text-white">
                {techData.length}+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-wider text-zinc-500">
                Technologies
              </p>
            </div>

            <div className="h-14 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <div>
              <h3 className="text-4xl font-bold text-white">4+</h3>

              <p className="mt-2 text-sm uppercase tracking-wider text-zinc-500">
                Years Learning
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Infinite Marquee */}
      <div className="mt-20">
        <TechMarquee />
      </div>

      {/* Cards */}
      <Container>
        <div className="relative mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/50 px-4 py-6 shadow-[0_35px_120px_rgba(15,23,42,.25)] backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-500/10 to-transparent" />

          <div className="relative grid auto-rows-[28rem] sm:auto-rows-[32rem] items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {techData.map((tech, index) => (
              <TechCard
                key={tech.name}
                name={tech.name}
                category={tech.category}
                description={tech.description}
                experience={tech.experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
