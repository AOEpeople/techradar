---
title: "CSS-in-JS"
ring: adopt
quadrant: methods-and-patterns
tags:       [coding, frontend]
---

Since the arrival of react 18, many CSS-in-JS libraries like styled components, emotion and stitches face a big problem.
They generate CSS only at runtime and therefore incompatible with streaming and React Server Components.
The React developers have written an [article](https://github.com/reactwg/react-18/discussions/110) about this, in which they explicitly advise against CSS-in-JS libraries that generate CSS at runtime.

This has led to great uncertainty among developers and communities of the affected libraries.
Is refactoring possible to turn the runtime libraries into buildtime libraries?
So far, none of the libraries have announced anything in this direction and one of the most popular new libraries, stitches, has been [no longer maintained](https://github.com/stitchesjs/stitches/discussions/1149#discussioncomment-6223090).

Fortunately, more and more CSS-in-JS solutions that generate CSS at buildtime are emerging since then.
Libraries like [Vanilla Extract](https://vanilla-extract.style/), [panda](https://panda-css.com/) or [Kuma UI](https://www.kuma-ui.com/) keep the excellent developer experience, compensate the performance disadvantages and are compatible to React 18.

Unfortunately, these libraries are not yet very widespread and it is difficult to judge how they will develop.
Therefore, at AOE we continue to use the established solutions as long as the new React features are not mandatory.

In addition, we are gaining experience with the new libraries because we see a lot of potential.
