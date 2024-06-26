---
title:      "Decoupling via Messaging"
ring:       trial
quadrant:   methods-and-patterns
tags:       [architecture, devops]
---

In [Microservices](/methods-and-patterns/microservices/), we have already covered the trend that modern architectures are moving away from big monolithic applications to distributed software suites. The result of splitting our software and infrastructure into smaller parts is the need for these parts to communicate with each other. This can be done through direct communication or message-based asynchronous communication.

While synchronous communication allows for more predictable "real-time" response times of the overall systems, asynchronous communication significantly increases the resilience and stability of the system and allows for the use of other integration and scaling patterns. However, it often comes with additional complexity.

Most IaaS Cloud providers offer messaging services, such as [AWS SQS](https://aws.amazon.com/sqs/), which provide the possibility to decouple our infrastructure via messaging. Additionally, we use [RabbitMQ](/tools/rabbitmq/) as a messaging and broker solution within our applications. The decision to use messaging and messaging patterns as an integration strategy can be made as part of [strategic design](/methods-and-patterns/strategic-domain-driven-design/) considerations.
