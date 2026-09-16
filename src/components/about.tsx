import Link from "next/link";

export default function About() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">
          About Me
        </h2>
        <p className="mb-6 text-muted-foreground">
          As a Software Development Engineer, I'm driven by Amazon's Leadership
          Principles, particularly Customer Obsession and Dive Deep. I specialize
          in building scalable, distributed systems on AWS that handle millions
          of requests daily while maintaining high availability and performance.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-medium">Core Expertise</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>AWS Cloud Architecture (EC2, S3, Lambda, DynamoDB, RDS)</li>
              <li>Distributed Systems & Microservices</li>
              <li>Data Structures & Algorithms Optimization</li>
              <li>TypeScript & Node.js Backend Development</li>
              <li>React & Next.js Frontend Development</li>
              <li>CI/CD Pipeline Automation</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Leadership Principles Alignment</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-primary">●</span>
                </div>
                <div className="ml-3">
                  <span className="font-medium">Customer Obsession:</span>
                  <span className="text-muted-foreground">
                    I start with the customer and work backwards, ensuring
                    every technical decision serves user needs.
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-primary">●</span>
                </div>
                <div className="ml-3">
                  <span className="font-medium">Dive Deep:</span>
                  <span className="text-muted-foreground">
                    I operate at all levels, stay connected to the details,
                    and audit frequently to ensure quality.
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-primary">●</span>
                </div>
                <div className="ml-3">
                  <span className="font-medium">Ownership:</span>
                  <span className="text-muted-foreground">
                    I think long-term and don't sacrifice long-term value for
                    short-term results.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <a className="btn btn-primary">Download Resume</a>
          </Link>
        </div>
      </div>
    </section>
  );
}