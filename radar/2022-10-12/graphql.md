---
title:      "GraphQL"
ring:       adopt
quadrant:   methods-and-patterns
---

[GraphQL](https://graphql.org/) is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.
GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

GraphQL was developed by Facebook around 2010 and released 2015. 
The main challenge it solves is to improve communication between browser and server on high dynamic web apps.

The advantages are:
* schema and schema validation together with a useful type system
* the client (browser) controls what data should be sent (data reduction)
* with one request you can fetch "all" required data

Client side integration can be achieved using the [Apollo Client Framework](/tools/apollo-client.html) which easily integrates into 
[React.js](/languages-and-frameworks/react.html) based frontends.

For [Spring Boot](https://spring.io/projects/spring-boot/) based backends [DGS](https://netflix.github.io/dgs/) provides a nice framework featuring:

- an annotation-based programming model for Spring
- a test framework for writing query tests as unit tests
- a [Gradle](https://gradle.org/) code generation plugin to create types from a GraphQL schema in Java or Kotlin


The framework [Flamingo offers support for GraphQL](https://docs.flamingo.me/3.%20Flamingo%20Modules/graphql.html) and also Flamingo Commerce offers a full featured GraphQL API for e-commerce features. ([Example GraphQL Console for Commerce](https://demoshop.flamingo.me/en/graphql-console))