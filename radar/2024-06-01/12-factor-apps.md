---
title:      "12 / 15 factor apps"
ring:       adopt
quadrant:   methods-and-patterns
tags:       [architecture]
---

The [12-factor app](https://12factor.net/de/) methodology, originally developed by Heroku, provides a comprehensive set of best practices for building cloud-native applications. This methodology emphasizes creating applications that are easy to manage, scalable, and portable across different environments. The [15-factor model](https://developer.ibm.com/articles/15-factor-applications/) extends this framework to address additional concerns relevant in modern cloud-native development.

### Core Principles of 12-Factor Apps

1. **Codebase**: Maintain a single codebase tracked in version control, with multiple deployments.
2. **Dependencies**: Explicitly declare and isolate dependencies.
3. **Config**: Store configuration in the environment.
4. **Backing Services**: Treat backing services as attached resources.
5. **Build, Release, Run**: Strictly separate build and run stages.
6. **Processes**: Execute the app as one or more stateless processes.
7. **Port Binding**: Export services via port binding.
8. **Concurrency**: Scale out via the process model.
9. **Disposability**: Maximize robustness with fast startup and graceful shutdown.
10. **Dev/Prod Parity**: Keep development, staging, and production as similar as possible.
11. **Logs**: Treat logs as event streams.
12. **Admin Processes**: Run admin/management tasks as one-off processes.

### Extending to 15 Factors

The 15-factor model builds upon the original principles by adding:

13. **API First**: Design APIs first to ensure interoperability and future-proofing.
14. **Telemetry**: Implement robust telemetry for monitoring and diagnostics.
15. **Authentication and Authorization**: Incorporate strong, centralized authentication and authorization mechanisms.

### Relevance

For us, this rather old pattern is still very relevant, and many methods, patterns, and practices on our radar are related and enable these patterns at their core. To name a few, [Kubernetes](/platforms-and-aoe-services/kubernetes/), [Prometheus](/platforms-and-aoe-services/prometheus/), [Self-Service Infrastructure](/platforms-and-aoe-services/self-service-infrastructure/), or the [API-First Design Approach](/methods-and-patterns/api-first-design-approach/) are very related. Others, like [Shared Responsibility Models](/methods-and-patterns/shared-responsibility/), are easier to implement based on this pattern.
