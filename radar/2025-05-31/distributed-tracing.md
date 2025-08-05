---
title:      "Distributed Tracing"
ring:       adopt
segment:    platforms-and-aoe-services
tags:       [devops]
---

Distributed Tracing creates visibility over processes spanning multiple applications.
In a microservice world where a request or operation involves multiple applications it is helpful to have an overview of what system is involved, at what point.

Also, visibility of communicated data and errors helps to quickly identify issues in a microservice environment.
Platforms like [Jaeger](/platforms-and-aoe-services/jaeger/) are suitable to monitor and analyze the collected information. Also [Prometheus](/platforms-and-aoe-services/prometheus/) supports ingesting data via the OpenTelemetry Protocol (OTLP).

### OpenTelemetry for Distributed Tracing

[OpenTelemetry](https://opentelemetry.io/) (OTel) is an open-source observability framework that provides standardized APIs, SDKs, and tools to collect traces, metrics, and logs from distributed systems. It is vendor-neutral and widely supported by observability platforms like Prometheus, Grafana, Jaeger, Datadog, and more.

### Key Concepts
- **Traces and Spans**: OpenTelemetry models a request as a trace, composed of multiple spans (operations). Each span contains timing, status, and contextual metadata.
- **Context Propagation**: OpenTelemetry supports the [W3C Trace Context](https://www.w3.org/TR/trace-context/) standard for propagating trace information across service boundaries, but also supports B3 headers for compatibility with existing setups.
- **Instrumentation**: frameworks and libraries are available, making it easy to get started.
- **Collector and Exporters**: The [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/) can receive, process, and export telemetry data to various backends.

We recommend to use OpenTelemetry as your default telemetry layer to future-proof your observability stack and reduce integration overhead.

### Further Reading
- [OpenTelemetry Documentation](https://opentelemetry.io/docs/)
- [OpenTelemetry Protocol (OTLP) Specification](https://opentelemetry.io/docs/specs/otlp/)
