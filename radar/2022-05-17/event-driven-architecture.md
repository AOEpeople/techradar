---
title: "Event-driven Architecture"
ring: adopt
quadrant: techniques
featured: true
---

Consider using an Event-Driven Architecture in the following cases (taken from: [Event-driven
architecture style](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven)):

- Multiple subsystems must process the same events.
- Real-time processing with minimum time lag.
- Complex event processing, such as pattern matching or aggregation over time windows.
- High volume and high velocity of data, such as IoT.
  Be aware of the complexities and potential pitfalls involved when adopting this architecture. When
  using Even-Driven Architectures consider using Event Sourcing.