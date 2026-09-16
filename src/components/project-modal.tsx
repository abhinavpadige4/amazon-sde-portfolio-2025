import { useState } from "react";
import { X } from "lucide-react";

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    problem: string;
    solution: string;
    architecture: string;
    contributions: string[];
    metrics: string[];
    github?: string;
    live?: string;
  };
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="bg-card text-card-foreground rounded-lg p-6 shadow-xl">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-muted-foreground hover:text-primary/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
          
          <h2 className="mb-4 text-2xl font-bold tracking-tight">{project.title}</h2>
          <p className="mb-6 text-muted-foreground">{project.description}</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold">Problem</h3>
              <p className="text-muted-foreground">{project.problem}</p>
            </div>
            
            <div>
              <h3 className="mb-2 font-semibold">Solution</h3>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
            
            <div>
              <h3 className="mb-2 font-semibold">Architecture</h3>
              <p className="text-muted-foreground">{project.architecture}</p>
            </div>
            
            <div>
              <h3 className="mb-2 font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded bg-muted/50 text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="mb-2 font-semibold">My Contributions</h3>
              <ul className="list-disc list-inset space-y-2 text-muted-foreground">
                {project.contributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="mb-2 font-semibold">Metrics & Impact</h3>
              <ul className="list-disc list-inset space-y-2 text-muted-foreground">
                {project.metrics.map((metric, index) => (
                  <li key={index}>{metric}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}