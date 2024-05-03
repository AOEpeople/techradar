---
title:      "Flamingo"
ring:       adopt
quadrant:   languages-and-frameworks
tags:       [academy training, coding]
---

Flamingo is a high productivity Go-based framework for rapidly building fast and pluggable web projects. It is used to construct scalable and maintainable (web) applications.

Flamingo is:

- Open source
- Written in Go
- Easy to learn
- Fast and flexible

Go, as a simple, powerful, and typesafe language, is excellent for implementing and scaling server-side logic. Flamingo has a clean architecture with clear dependencies in mind and offers typical features and support for modern web applications:

- Powerful templating engines, e.g., support for Pug templates with reusable mixins and lightweight scripting.
- Configuration concepts using YAML and support for multiple areas and contexts.
- Powerful dependency injection.
- A module concept for building modular and pluggable applications.
- Authentication concepts and security middleware.
- Flexible routing with support for prefix routes and reverse routing.
- Web controller support with Request/Response/Form Handling, etc.
- Operational readiness: Logging, (distributed) Tracing, Metrics, and Healthchecks with separate endpoints.
- Localization.
- Commands.
- Session handling and management.
- GraphQL support and, therefore, support to build nice SPAs and PWAs on top of it.
- Resilience and caching for external API calls.

Flamingo itself does not contain an ORM mapper or libraries. Instead, it emphasizes a "ports and adapters" architecture so that you have a technology-free (domain) model and any possible (and replaceable) persistence behind it. This makes Flamingo useful for building microservices and applications, especially for constructing "frontends" or portals that require interaction with other (micro)services in a distributed architecture. By adhering to the architectural recommendation, you can build modular applications with replaceable adapters that provide independent testability.

With **"Flamingo Commerce,"** there is an additional active project that offers rich and flexible features to build modern e-commerce applications.
