---
title:      "React Server Components"
ring:       assess
quadrant:   methods-and-patterns
tags:       [frontend, coding]
---

Shortly after releasing React 17 in October 2020, the team announced React Server Components (RSC) in December 2020 as a working draft.
RSCs are described as a new kind of application architecture in React, to reduce the amount of JavaScript that's shipped to the client.
The overall goal is to achieve better performance, user experience and maintainability.

The new feature allows to create components that are running on the server exclusively. That means there will be zero
effect on the bundle size that is downloaded by the client. For example libraries that are used in server components are
not shipped to the client. RSCs have the ability to access server-side resources (e.g. database, file system) directly.

Besides server components there are client components that actually are the classic components everyone's known until yet.
The only difference is, client components need to be explicitly declared by a directive. To decide which component needs
to be client or server might become one of the more challenging parts, especially when migrating existing applications is
the goal.

It looks like RSCs are most effectively used with Server Side Rendering, even tho it is possible to use them without it.
RSCs and Server Side Rendering complement each other pretty good, because server components are only rendered once on the server and
don't need to get shipped to the client. Client components are still rendered on the server and get hydrated afterward.
But with a smart application structure where the amount of client side code is reduced to a minimum and in combination
with React 18's [Suspense and Selective Hydration](https://github.com/reactwg/react-18/discussions/37) features there is an expected increase in performance. To prove this assumption the React team
decided to collaborate with Vercel (maintainer of [NextJS](/languages-and-frameworks/next-js.html)) to integrate early into a fitting environment.

Overall we see the potential of this new approach, even tho there are still several steps to go, especially for the meta
frameworks to achieve production readiness. But it seems only a matter of time that adoption of React Server Components
will spread. That's why we put it to the assess ring, to keep an eye on this topic.
