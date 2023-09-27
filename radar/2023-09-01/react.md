---
title:      "React.js"
ring:       adopt
quadrant:   languages-and-frameworks
tags: [coding, frontend]
---

React today is the frontend library with the highest distribution inside our company and is used in different varieties.
May it be through frameworks like [NextJS](/languages-and-frameworks/next-js.html) and [Remix](/languages-and-frameworks/remix.html)
or as client-side-only applications, React can be found in many of our current projects. Over the years there has grown
a community with a lot of expertise inside the company.

We are convinced that the following features and many others of React 18 will strengthen its popularity inside the company
and the community in general.

**Suspense**:
It isn't a completely new feature as it was already released as a basic version in 2018. But there were some key
limitations. Its first official use case was code splitting with `React.lazy`. This was only possible on the client but
not during server rendering. The goal always was to improve the loading experience on the client and the server.
Now with React 18, Suspense enables a new feature called Streaming server rendering. In short that means React can send
the HTML of the loading fallback first and then after loading completes, send the actual HTML content to the client.
The React team still has some improvements to do, especially to enable data fetching libraries to use Suspense. Therefor
they are collaborating with authors of some of the biggest libraries like TanStack Query, SWR or Apollo.

**Server Components**:
It's the name of a new React application architecture paradigm with the goal to reduce the amount of JavaScript sent
to the client. The feature introduces a new kind of component that is running on the server exclusively. This new approach
is pretty promising, that's why we gave [React Server Components](/methods-and-patterns/react-server-components.html) a dedicated item on our Tech Radar.

**Concurrency**:
It's a foundational update to React's rendering model. Mostly happening under the hood, it brings the possibility to create
multiple versions of a user interface at the same time. With concurrent React, rendering can be interrupted, abandoned and
continued which means the application can respond to user interactions immediately if it's currently in a rendering task.


The React team is working closely with some of the biggest players in the React ecosystem to stabilise and improve the library
but also to experiment with new features, which we think is a perfect way to keep React as exciting as it is.