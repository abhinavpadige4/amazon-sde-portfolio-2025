export const projectsData = [
  {
    id: 1,
    title: "Real-time Analytics Platform",
    description:
      "Built a scalable analytics platform processing 1M+ events per second using AWS Kinesis and Lambda for fraud detection and real-time business insights",
    techStack: ["AWS Kinesis", "Lambda", "DynamoDB", "Redis", "TypeScript", "Terraform"],
    problem: "Legacy batch processing system couldn't handle real-time data demands for fraud detection, causing delayed alerts and missed prevention opportunities",
    solution: "Designed event-driven architecture with Kinesis streams for ingestion, Lambda for processing, and DynamoDB for storage with Redis caching layer",
    architecture: "Event-driven microservices with CQRS pattern and eventual consistency",
    contributions: [
      "Architected and implemented Kinesis-based event processing pipeline handling 1.2M events/second peak load",
      "Optimized Lambda functions reducing processing latency by 60% through efficient data structures and batching",
      "Implemented DynamoDB auto-scaling for cost optimization saving $45K annually",
      "Created monitoring dashboard with CloudWatch metrics and custom alerts for SLA compliance",
      "Infrastructure as Code using Terraform for reproducible deployments across environments"
    ],
    metrics: [
      "Processed 1.2M events/second peak load during Black Friday traffic",
      "Reduced fraud detection latency from 5min to <30sec enabling real-time intervention",
      "Saved $45K annually through optimized resource usage and reserved instances",
      "99.95% uptime SLA achieved with multi-AZ deployment",
      "Sub-second API response times for dashboard queries"
    ],
    github: "https://github.com/alexjohnson-sde/real-time-analytics-platform",
    live: "https://analytics-platform.alexjohnson-sde.com",
  },
  {
    id: 2,
    title: "Distributed Cache System",
    description:
      "Implemented a Redis-compatible distributed cache with consistent hashing and automatic failover for microservices architecture",
    techStack: ["Node.js", "TypeScript", "Redis Protocol", "Consistent Hashing", "Docker", "Kubernetes"],
    problem: "Existing cache solution became a bottleneck during peak traffic causing increased latency and application timeouts during flash sales",
    solution: "Built horizontally scalable cache cluster with consistent hashing and gossip protocol for node discovery and failure detection",
    architecture: "Peer-to-peer distributed system with consistent hashing ring and replication factor of 3",
    contributions: [
      "Implemented consistent hashing algorithm for minimal resharding (<5% key movement during node changes)",
      "Built gossip protocol for automatic node discovery and failure detection with <2s convergence time",
      "Added Lua scripting support for complex cache operations reducing round-trip calls",
      "Created Helm charts for Kubernetes deployment enabling one-click scaling",
      "Implemented read replicas and automatic failover ensuring high availability"
    ],
    metrics: [
      "Handled 500K requests/second with <2ms latency 99th percentile",
      "Reduced cache miss rate by 40% through smart key distribution and warming strategies",
      "Zero downtime during node failures and maintenance windows",
      "60% cost reduction vs previous solution through efficient resource utilization",
      "Linear scaling performance validated up to 50 node cluster"
    ],
    github: "https://github.com/alexjohnson-sde/distributed-cache-system",
    live: null,
  },
  {
    id: 3,
    title: "E-commerce Order Management System",
    description:
      "Microservices-based order processing system handling $10M+ monthly transactions with guaranteed consistency and audit trails",
    techStack: ["AWS ECS", "PostgreSQL", "RabbitMQ", "Node.js", "GraphQL", "TypeScript"],
    problem: "Monolithic order system couldn't scale during peak shopping seasons causing lost sales and poor customer experience",
    solution: "Decomposed into microservices using event-driven architecture with message queues for reliable communication",
    architecture: "Microservices with event sourcing and CQRS patterns for auditability and scalability",
    contributions: [
      "Designed microservices architecture with bounded contexts for order, inventory, payment, and notification services",
      "Implemented event-driven communication using RabbitMQ ensuring guaranteed message delivery",
      "Created GraphQL API gateway for frontend consumption with real-time subscription support",
      "Implemented distributed tracing with Jaeger enabling end-to-end request tracking",
      "Added circuit breaker pattern preventing cascade failures during service degradation"
    ],
    metrics: [
      "Processed 50K orders/hour during peak events (Prime Day, Black Friday)",
      "99.99% order processing accuracy with comprehensive audit trails",
      "Reduced order processing time from 10s to <2s through async processing and caching",
      "Scaled from 5 to 50 instances automatically based on load using AWS Auto Scaling",
      "99.9% availability SLA met with multi-region deployment strategy"
    ],
    github: "https://github.com/alexjohnson-sde/ecommerce-order-management",
    live: "https://order-system.alexjohnson-sde.com",
  }
];