export const experienceData = [
  {
    id: 1,
    company: "Amazon Web Services",
    position: "Senior Software Engineer",
    location: "Seattle, WA",
    startDate: "Jan 2022",
    endDate: "Present",
    current: true,
    achievements: [
      "Led migration of monolithic application to microservices on AWS, reducing deployment time from weekly to daily and enabling independent team scaling",
      "Designed and implemented event-driven architecture using AWS SQS and Lambda, handling 50K+ messages/hour with exactly-once processing guarantees",
      "Optimized database queries and implemented caching strategies, improving API response time by 70% and reducing database load by 60%",
      "Mentored 5 junior engineers in AWS best practices and distributed systems design, improving team velocity and code quality",
      "Reduced infrastructure costs by 30% through right-sizing, reserved instance optimization, and spot instance utilization for batch workloads",
      "Implemented comprehensive observability stack with CloudWatch, X-Ray, and custom metrics reducing MTTR by 50%"
    ],
    technologies: ["AWS", "Node.js", "TypeScript", "Docker", "Kubernetes", "PostgreSQL", "Redis", "Terraform"],
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Software Engineer II",
    location: "Redmond, WA",
    startDate: "Mar 2020",
    endDate: "Dec 2021",
    current: false,
    achievements: [
      "Built real-time chat application using WebSockets and Redis, supporting 10K+ concurrent users with sub-second message delivery",
      "Implemented CI/CD pipeline with GitHub Actions, reducing release cycle from 2 weeks to 2 days and improving deployment reliability",
      "Created automated testing framework achieving 85% test coverage including unit, integration, and end-to-end tests",
      "Optimized frontend bundle size by 40% through code splitting and lazy loading, improving initial page load performance",
      "Collaborated with product team to implement 15+ customer-requested features increasing user engagement by 25%",
      "Reduced production incidents by 60% through improved error handling and monitoring alerts"
    ],
    technologies: ["React", "Node.js", "Redis", "WebSockets", "GitHub Actions", "Docker", "PostgreSQL"],
  },
  {
    id: 3,
    company: "Google",
    position: "Software Engineering Intern",
    location: "Mountain View, CA",
    startDate: "Jun 2019",
    endDate: "Aug 2019",
    current: false,
    achievements: [
      "Developed distributed file system simulator using consistent hashing and replication, improving fault tolerance and scalability",
      "Implemented load balancing algorithms improving system throughput by 45% under varying workloads",
      "Created visualization dashboard for monitoring node performance and network topology using D3.js and React",
      "Presented findings at university research symposium receiving recognition for innovative approach to distributed systems",
      "Published paper on fault-tolerant distributed systems in undergraduate research journal",
      "Received return offer for full-time position based on outstanding performance"
    ],
    technologies: ["Java", "Python", "MongoDB", "D3.js", "React", "Google Cloud Platform"],
  }
];