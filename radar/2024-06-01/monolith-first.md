---
title:      "Monolith First"
quadrant:   methods-and-patterns
ring:       trial
tags:       [architecture]
---

The [Monolith First](https://martinfowler.com/bliki/MonolithFirst.html) approach advocates starting new projects with a monolithic architecture that is carefully modularized. It balances the simplicity of monolithic systems with the flexibility of microservices by ensuring that the monolith is well-structured into discrete, encapsulated modules.

The concept of the strategic monolith stems from the idea that starting with a monolithic architecture can be beneficial for many organizations, especially when dealing with new or smaller projects. Monoliths are easier to develop, test, and deploy because of their cohesive nature. As Martin Fowler points out, many successful software systems have started as monoliths and only transitioned to microservices when scale or complexity required it. This approach allows teams to manage complexity and maintainability while providing a foundation for potential future transitions to microservices. By modularizing the monolith, developers create clear boundaries within the codebase, making it easier to extract individual services as needed.

### Benefits

- **Future-Proof Architecture**: Modular design within a monolith allows for parts of the system to be easily extracted into individual microservices as requirements evolve or the business grows. This approach ensures that the architecture can adapt to changing needs without extensive refactoring.
- **Operational Simplicity**: Starting with a monolithic architecture simplifies deployment and management by keeping all modules within a single deployable unit. This reduces the complexity and overhead associated with distributed systems, such as handling inter-service communication, distributed data management, and comprehensive monitoring.
- **Performance and Latency Benefits**: Intra-process communication within a monolith results in lower latency and higher performance compared to inter-service communication in microservices. This ensures that the system remains responsive and efficient as it scales.
- **Reduced Complexity**: A "monolith first" approach avoids the initial challenges of distributed systems, allowing teams to focus on building robust features and gaining a deep understanding of the domain before considering a transition to microservices.

At AOE, we strive to follow this approach when starting greenfield projects. We aim to balance between creating systems that are "as small as possible" yet "as big as necessary," ensuring robust and maintainable architectures that can scale and evolve with business needs. This provides a balanced path that aligns immediate development needs with long-term architectural goals.
