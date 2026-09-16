import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-[600px] w-full items-center justify-between gap-8 px-6 py-12">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Alex Johnson | Amazon SDE | Building Scalable Systems on AWS
        </h1>
        <p className="text-lg text-muted-foreground">
          Software Development Engineer with expertise in distributed systems,
          AWS cloud architecture, and data structures & algorithms. Passionate
          about solving complex problems at scale and delivering customer-obsessed
          solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <a className="btn btn-primary">Download Resume</a>
          </Link>
          <a href="#projects" className="btn btn-outline">
            View Projects
          </a>
        </div>
      </div>
      <div className="flex-1 max-w-[300px]">
        <div className="relative aspect-square">
          <img 
            src="/images/headshot.jpg" 
            alt="Professional headshot of Alex Johnson" 
            className="object-cover w-full h-full rounded-xl shadow-lg"
          />
          {/* Optional: Add a subtle overlay for better text contrast if needed */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 transparent pointer-events-none"></div>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
    </section>
  );
}