---
title:      "Python Tornado"
ring:       adopt
quadrant:   "languages-and-frameworks"
tags:       [coding]
---

Tornado is an open-source, non-blocking web server framework and asynchronous networking library for Python. It is designed to handle high levels of concurrent connections and is particularly well-suited for building scalable, real-time web applications and web services. Tornado is often used in situations where low latency and high performance are critical requirements.

Key features and characteristics of Python Tornado include:

1. **Asynchronous I/O:** Tornado is built around an event-driven and non-blocking architecture. It uses Python's generators (coroutines) to handle asynchronous I/O operations, allowing it to efficiently handle a large number of connections simultaneously without creating a new thread or process for each connection.

2. **Web Framework:** While Tornado is primarily known as an asynchronous web server, it also includes a minimalistic web framework for building web applications. It provides support for handling HTTP requests, routing, and templating.

3. **WebSocket Support:** Tornado has built-in support for WebSocket communication, making it suitable for real-time applications such as chat applications, online gaming, and live data streaming.

4. **Scalability:** Due to its non-blocking architecture, Tornado can handle a high number of concurrent connections efficiently, making it a good choice for building scalable web services and APIs.

5. **Community and Ecosystem:** Tornado has an active community of developers and users who contribute to its development and provide extensions and plugins. However, it may have a smaller ecosystem compared to some other Python web frameworks like Django or Flask.

6. **Event Loop:** Tornado's event loop is at the core of its asynchronous nature. It efficiently manages I/O operations and callbacks, allowing developers to write code that remains responsive even under high loads.

7. **Support for Long Polling:** Tornado supports long polling, a technique used in real-time web applications to simulate server push and maintain persistent connections with clients.

8. **Performance:** Tornado is known for its high performance, especially in scenarios that require handling a large number of short-lived connections.

It's important to note that while Tornado is a powerful framework for certain use cases, it may have a steeper learning curve compared to more traditional, blocking web frameworks like Django or Flask. Developers often choose Tornado when they need to build real-time, highly scalable applications where low latency and efficient handling of concurrent connections are critical.
