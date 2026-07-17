import Container from "@/components/layout/Container";
import ProjectsClient from "./ProjectsClient";
import { projectData } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-mesh absolute right-0 top-0 h-96 w-96 translate-x-1/3 rounded-full bg-blue-500/10 blur-3xl" />
        <div
          className="animate-mesh absolute left-0 bottom-1/4 h-80 w-80 -translate-x-1/3 rounded-full bg-violet-500/5 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Projects
          </span>

          <h2 className="mt-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-6 text-balance text-lg leading-8 text-zinc-400">
            Some projects that represent my experience building real-world
            applications.
          </p>
        </div>

        <ProjectsClient projects={projectData} />
      </Container>
    </section>
  );
}
