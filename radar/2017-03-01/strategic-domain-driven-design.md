---
title:      "Strategic Domain Driven-Design"
ring:       adopt
quadrant:   methods-and-patterns
tags:       [academy training, architecture]
---

Designing distributed applications needs to be done wisely. Strategic Domain-Driven Design (DDD) is an approach for modeling large-scale applications and systems, introduced in the latter part of Eric Evans' book *Domain-Driven Design*.

Domain-Driven Design is a well-known pattern family that has been established at AOE for quite some time now. Unlike Domain-Driven Design, which focuses on the tactical design in an application, Strategic Domain-Driven Design is an approach that is very helpful for the high-level strategic design of an application and distributed software architecture.

It is a pattern family focused on using and defining Bounded Contexts and thinking explicitly about the different relationship patterns and the required "translation" of similar "concepts" between the bounded contexts. It is helpful to argue for and find a good strategic architecture in alignment with the requirements, the domain, and by considering Conway's Law. A context map and a common conceptual core help to understand and improve the overall strategic picture. Especially with the microservices approach, it is important to define and connect services following the high cohesion - low coupling principles by identifying fitting bounded contexts.

The following chart gives an overview of possible relationships between bounded contexts:
![strategic-domain-driven-design-relationships](/images/strategic-domain-driven-design-relationships.png)

While we have found that this approach is especially useful in designing distributed systems and applications with [microservices](/methods-and-patterns/microservices/), we have also extended this approach to provide guidelines for general enterprise architectures.
