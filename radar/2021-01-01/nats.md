---
title: "NATS"
ring: assess
quadrant: tools
featured: true
---

[NATS](https://nats.io/) is a cloud native messaging and stream-data system for modern distributed software systems.
Two design-goals [design-goals](https://github.com/nats-io/nats-general/blob/master/architecture/DESIGN.md) were simplizity and performance. These are adopted by selecting [golang](https://golang.org/) for the server implementation and reducing the memory footprint for both: server- and client-side.
The server-side provides simple and efficient horizontal scaling (e.g. deploying it inside kubernetes) and the small client-footprint allows us to use it im embedd-systems, edge-computing and IoT devices e.g. for command and controll use-cases. Also the long list of existing [integrations](https://docs.nats.io/compare-nats#integrations) and the plugin-systems brings a great flexibilty.
