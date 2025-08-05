---
title:      "Astro"
ring:       assess
segment:    languages-and-frameworks
tags:       [coding, frontend]
---

[Astro](https://astro.build/) is an agnostic frontend framework targeted at static websites with moderate amounts of interactivity.

Fundamentally, Astro is based on the concept of [islands architecture](/methods-and-patterns/islands-architecture/), where interactive components behave like isolated applications within an otherwise static page. JavaScript is only loaded when needed, and developers can define exactly when hydration occurs using Astro's [directives](https://docs.astro.build/en/reference/directives-reference/). This enables fine-grained control over JavaScript loading and can significantly reduce initial load times.

However, this approach increases design complexity, as developers must deliberately decide which components require interactivity and under what conditions. For instance, if a component is configured to hydrate only on mobile, it will remain non-interactive on desktop—potentially resulting in a confusing user experience.

For static components, i.e., components which will not require any JS during runtime, Astro supports its own component-based templating syntax, which also allows fetching data and fully statically rendering components during build time. Components which do require client-side interactivity can be written in any of the popular frontend frameworks including React, Vue, Svelte, or Preact. These dynamic components will receive the necessary framework-specific JavaScript at the point of hydration individually.

Processing content, e.g. from a content management systems (CMS), is also greatly facilitates due to Astro's [content collections](https://docs.astro.build/en/guides/content-collections). They provide a unified way to interact with data from various sources whilst also adding a number of quality-of-life features such as automatic type generation and validation.

Astro's reliance on island architecture can greatly improve the performance of websites with mostly static content, but can also worsen it for pages which rely heavily on dynamic content like strongly user-based applications for example. Therefore, at AOE, we are evaluating using Astro in projects such as marketing websites or documentation sites (similar to the one you are on right now), where the majority of the content is static.

We acknowledge that Astro does provide features and functionality based around server side rendering (SSR), however, we see these features as more of an extension to the core static site generation (SSG) functionality Astro aims to provide, rather than a primary use case. For fully server-side rendered applications, we do not see Astro as a suitable choice compared to frameworks which specifically target SSR, such as [Next.js](/languages-and-frameworks/next-js/) for example.
