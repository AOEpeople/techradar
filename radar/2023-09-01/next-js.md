---
title: "Next.js"
ring: adopt
quadrant: languages-and-frameworks
tags: [coding, frontend]
---
We are still convinced that NextJS is one of the goto frameworks for React and are excited about the features that version
13 brought with it. On the NextJS Conf 2022 the team announced some pretty cool adaptions in this release but the most
interesting is the new "app" router. In collaboration with the React team, the new routing architecture brings some of the
newest and promising features of React 18 to life.

When using the app router every component by default is a [React Server Component](/methods-and-patterns/react-server-components.html)
which is one of the first real integrations of this pattern in a framework. The goal is to build complex interfaces while
keeping the amount of JavaScript that's shipped to the client as low as possible. Another exciting feature is Streaming
that allows to incrementally transfer parts of the UI to the client when they are ready. For example immediately showing
some fallback UI until an asynchronous action is completed and then streaming the final UI to the client. With the app
router it is also possible to easily create shared layouts that preserve state on navigation and remain interactive.

The good thing is, that this new architecture can exist besides the old page router. That gives us the possibility to
incrementally adapt to the new features in existing projects. 