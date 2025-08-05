---
title:      "Islands Architecture"
ring:       assess
quadrant:   methods-and-patterns
tags:       [frontend]
---

Islands architecture is a modern web development pattern focused on optimizing performance by decomposing pages into self-contained, interactive components—so-called "islands"—within an otherwise static layout.

Non-interactive content is fully rendered on the server and sent to the client as static HTML. Interactive components, including those nested within static content, are hydrated individually and only when needed. Hydration can be deferred until a specific condition is met, such as user interaction or viewport visibility.

This approach allows JavaScript to be loaded only for components that require it, significantly reducing the initial bundle size compared to traditional single-page applications.

Islands architecture promotes fast load times and scalability, but requires a more deliberate design process to determine when and how each component should be hydrated.
