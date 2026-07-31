import Container from "@/components/layout/Container";
import ProjectsClient from "./ProjectsClient";
import ProjectsBackground from "./ProjectsBackground";
import { projectData } from "@/data/projects";

export default function Projects() {
  const total = projectData.length;

  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      <ProjectsBackground />

      <Container>
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Projects
            </span>

            <h2 className="mt-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
              Featured Projects
            </h2>

            <p className="mt-6 text-balance text-lg leading-8 text-zinc-400">
              A curated collection of real-world applications showcasing my expertise in full stack software engineering and modern web architecture.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-400 backdrop-blur sm:flex">
            <span className="font-mono text-2xl font-semibold text-white">
              {String(total).padStart(2, "0")}
            </span>
            <span className="leading-tight">
              Projects
              <br />
              Showcased
            </span>
          </div>
        </div>

        <ProjectsClient projects={projectData} />
      </Container>
    </section>
  );
}
