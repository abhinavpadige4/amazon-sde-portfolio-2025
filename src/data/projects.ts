export const projectsData = [
  {
    id: 1,
    title: "Real-time Analytics Platform",
    description:
      "Built a scalable analytics platform processing 1M+ events per second using AWS Kinesis and Lambda",
    techStack: ["AWS Kinesis", "Lambda", "DynamoDB", "Redis", "TypeScript"],
    problem: "Legacy batch processing system couldn't handle real-time data demands for fraud detection",
    solution: "Designed event-driven architecture with Kinesis streams for ingestion, Lambda for processing, and DynamoDB for storage",
    architecture: "Event-driven microservices with CQRS pattern",
    contributions: [
      "Architected and implemented Kinesis-based event processing pipeline",
      "Optimized Lambda functions reducing processing latency by 60%",
      "Implemented DynamoDB auto-scaling for cost optimization",
      "Created monitoring dashboard with CloudWatch metrics",
    ],
    metrics: [
      "Processed 1.2M events/second peak load",
      "Reduced fraud detection latency from 5min to <30sec",
      "Saved $45K annually through optimized resource usage",
      "99.95% uptime SLA achieved",
    ],
    github: "https://github.com/username/analytics-platform",
    live: "https://analytics-platform.example.com",
  },
  {
    id: 2,
    title: "Distributed Cache System",
    description:
      "Implemented a Redis-compatible distributed cache with consistent hashing and automatic failover",
    techStack: ["Node.js", "TypeScript", "Redis Protocol", "Consistent Hashing", "Docker"],
    problem: "Existing cache solution became a bottleneck during peak traffic causing increased latency",
    solution: "Built horizontally scalable cache cluster with consistent hashing and gossip protocol for node discovery",
    architecture: "Peer-to-peer distributed system with consistent hashing ring",
    contributions: [
      "Implemented consistent hashing algorithm for minimal resharding",
      "Built gossip protocol for automatic node discovery and failure detection",
      "Added Lua scripting support for complex cache operations",
      "Created Helm charts for Kubernetes deployment",
    ],
    metrics: [
      "Handled 500K requests/second with <2ms latency",
      "Reduced cache miss rate by 40% through smart key distribution",
      "Zero downtime during node failures",
      "60% cost reduction vs previous solution",
    ],
    github: "https://github.com/username/distributed-cache",
    live: null,
  },
  {
    id: 3,
    title: "E-commerce Order Management System",
    description:
      "Microservices-based order processing system handling $10M+ monthly transactions",
    techStack: ["AWS ECS", "PostgreSQL", "RabbitMQ", "Node.js", "GraphQL"],
    problem: "Monolithic order system couldn't scale during peak shopping seasons",
    solution: "Decomposed into microservices using event-driven architecture with message queues",
    architecture: "Microservices with event sourcing and CQRS patterns",
    contributions: [
      "Designed microservices architecture with bounded contexts",
      "Implemented event-driven communication using RabbitMQ",
      "Created GraphQL API gateway for frontend consumption",
      "Implemented distributed tracing with Jaeger",
    ],
    metrics: [
      "Processed 50K orders/hour during peak events",
      "99.99% order processing accuracy",
      "Reduced order processing time from 10s to <2s",
      "Scaled from 5 to 50 instances automatically based on load",
    ],
    github: "https://github.com/username/order-management",
    live: "https://order-system.example.com",
  },
];