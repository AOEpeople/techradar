---
title:      "State Management Pattern"
ring:       adopt
quadrant:   methods-and-patterns
tags:       [architecture, coding]
---

State Management is a design pattern with the goal of efficiently sharing state data across components while separating domain representation from state management. This pattern is widely used in many popular web frameworks such as [Vuex](/languages-and-frameworks/vuex/) or [Redux](/languages-and-frameworks/redux/).

Especially in [reactive](/methods-and-patterns/reactive-programming/) systems, this pattern helps in maintaining decoupled, stateless components with immutable data. The implementation of state management varies and depends on the specific requirements of the application at hand.

For distributed backend systems, one might consider utilizing [Akka's](/languages-and-frameworks/akka/) cluster sharding module to elastically manage domain object states.

We employ various state management patterns across most [Vue](/languages-and-frameworks/vue/) and [React](/languages-and-frameworks/react/) projects that require them.
