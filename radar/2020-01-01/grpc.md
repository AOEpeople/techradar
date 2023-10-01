---
title:      "gRPC"
ring:       adopt
quadrant:   "languages-and-frameworks"
tags:       [api]
---

gRPC (short for "Google Remote Procedure Call") is an open-source, high-performance remote procedure call (RPC) framework initially developed by Google. It is designed for building efficient and scalable distributed systems. gRPC enables communication between applications or microservices running on different machines or even in different environments, making it well-suited for building distributed and microservices-based architectures.

Key features of gRPC include:

1. **Language Agnostic:** gRPC supports multiple programming languages, including but not limited to C++, Java, Python, Go, and more, making it versatile for developers working in different ecosystems.

2. **Efficiency:** It uses Protocol Buffers (protobufs) as its interface definition language, which results in compact and efficient serialization of data. This efficiency is crucial for reducing bandwidth usage and improving performance, especially in distributed systems.

3. **Streaming:** gRPC supports both unary RPC (request and response) and bidirectional streaming, allowing for more flexible and interactive communication patterns between services.

4. **Multiplexing:** It can handle multiple RPCs simultaneously over a single network connection, reducing the overhead associated with opening multiple connections.

5. **Security:** gRPC supports various authentication and encryption mechanisms, ensuring secure communication between services.

6. **Code Generation:** gRPC generates client and server code from the protocol definition, which simplifies development and ensures that both sides adhere to the defined contract.

7. **Pluggable:** Developers can extend gRPC's functionality by adding custom features or middleware.

gRPC is often used in microservices architectures, cloud-native applications, and other distributed systems where efficient and reliable communication between services is essential.
