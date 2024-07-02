---
title:      "Remix"
ring:       adopt
quadrant:   languages-and-frameworks
tags:       [coding, frontend]
---

With Remix v2.2.0, Remix itself is now just a Vite plugin. This gives us access to the entire ecosystem of Vite plugins and even more, for example:

- **Near-instant dev startup**: Vite lazily compiles your app code on-demand, so the dev server can boot immediately.
- **Pre-bundled dependencies**: Vite only processes dependencies once, so large libraries like Material UI and AntD don’t become bottlenecks for rebuilds or hot updates.
- **Incremental hot updates**: Vite keeps track of dependencies so it only needs to reprocess app code that depends on the changes.
