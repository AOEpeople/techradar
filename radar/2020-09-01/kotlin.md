---
title: "Kotlin"
ring: adopt
quadrant: languages-and-frameworks
featured: true
---

We see Kotlin as a logical evolution of Java bringing increased agility to development teams while requiring a minimal learning curve when coming from Java. 
When using Kotlin Prefer Ktor over Spring Boot for new Kotlin projects.

We prefer Kotlin when:
- The application needs to perform multiple tasks concurrently, where some of these tasks can be computationally expensive. The application needs to remain performant during this time. The concurrency model of Kotlin is usually a better and more performant match in these cases compared to the event-based Node.js model. Typically this situation will be encountered only in monolithical (and sometimes also microservices) architectures and not in serverless architectures where separate tasks are normally executed in isolation.