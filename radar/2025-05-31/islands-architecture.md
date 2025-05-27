---
title:      "Islands Architecture"
ring:       assess
quadrant:   methods-and-patterns
tags:       [ frontend]
---

Islands architecture is a modern web development pattern that focuses on optimizing the performance of web applications by breaking them down into smaller, self-contained components. Allowing for component which don't allow any interaction to be statically rendered on the server before being sent to the client. Interactive components, even ones contained in the static components, can then be hydrated to enable interactivity when needed, all without being dependent on any components higher up in the hierarchy. The point in time hydration occurs can also be deferred until it becomes necessary. This can be done on **a per by per basis** for each interactive component. This greatly reduces the initial amount of JavaScript that needs to be loaded compared to traditional single-page applications (SPAs).
