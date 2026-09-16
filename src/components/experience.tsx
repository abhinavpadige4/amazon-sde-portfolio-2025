import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div key={exp.id} className="border-l-2 border-primary/50 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </p>
              </div>
              <p className="text-muted-foreground">{exp.location}</p>

              <div className="mt-4 flex flex-wrap gap-2 mb-4">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded bg-muted/50 text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}