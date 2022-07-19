---
title: "Event-driven Architecture"
ring: adopt
quadrant: techniques
featured: true
---

Decoupled systems that run in response to events. An event-driven architecture uses events to
trigger and communicate between decoupled services and is common in modern applications built with
microservices. An event is a change in state, or an update, like an item being placed in a shopping
cart on an e-commerce website. Events can either carry the state (the item purchased, its price, and
a delivery address) or events can be identifiers (a notification that an order was shipped).
Event-driven architectures have three key components: event producers, event routers, and event
consumers. A producer publishes an event to the router, which filters and pushes the events to
consumers. Producer services and consumer services are decoupled, which allows them to be scaled,
updated, and deployed independently. This also becomes a viable way for handling intra-service
communication (pub/sub style). It should be preferred over direct intra-service API communication
where possible.