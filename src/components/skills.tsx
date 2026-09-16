import { skillsData } from "@/data/skills";

export default function Skills() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Technical Skills
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* AWS Column */}
          <div className="space-y-4">
            <h3 className="mb-2 text-xl font-semibold">AWS Services</h3>
            <div className="space-y-2">
              {skillsData.aws.map((skill) => (
                <div key={skill.name} className="flex justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <div className="w-24 bg-muted/50 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full bg-primary transition-all duration-500 w-[${skill.level}%]`}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Distributed Systems Column */}
          <div className="space-y-4">
            <h3 className="mb-2 text-xl font-semibold">Distributed Systems</h3>
            <div className="space-y-2">
              {skillsData.distributedSystems.map((skill) => (
                <div key={skill.name} className="flex justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <div className="w-24 bg-muted/50 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full bg-primary transition-all duration-500 w-[${skill.level}%]`}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* DSA Column */}
          <div className="space-y-4">
            <h3 className="mb-2 text-xl font-semibold">Data Structures & Algorithms</h3>
            <div className="space-y-2">
              {skillsData.dsa.map((skill) => (
                <div key={skill.name} className="flex justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <div className="w-24 bg-muted/50 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full bg-primary transition-all duration-500 w-[${skill.level}%]`}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}