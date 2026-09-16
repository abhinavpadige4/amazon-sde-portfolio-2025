import { useState } from "react";
import ProjectCard from "./project-card";
import ProjectModal from "./project-modal";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    | typeof projectsData[number]
    | null
  >(null);

  return (
    <section className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Projects & Case Studies
        </h2>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              metrics={project.metrics}
              github={project.github}
              live={project.live}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}