"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/data/projects";

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            index={index}
            onOpenDetail={() => setSelected(project)}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
