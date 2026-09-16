import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  metrics: string[];
  github?: string;
  live?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  metrics,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg border-muted/50 bg-card text-card-foreground hover:border-primary/50 transition-colors">
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs rounded bg-muted/50 text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mb-4 space-y-1 text-sm">
          {metrics.map((metric, index) => (
            <div key={index} className="flex">
              <span className="flex-shrink-0">•</span>
              <span className="ml-2">{metric}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3">
          {github && (
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <a className="btn btn-outline btn-sm">GitHub</a>
            </Link>
          )}
          {live && (
            <Link href={live} target="_blank" rel="noopener noreferrer">
              <a className="btn btn-primary btn-sm">Live Demo</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}