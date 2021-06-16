---
title:      "State Management Pattern"
ring:       adopt
quadrant:   languages-and-frameworks

---

State Management is a design pattern with the goal of separating domain representation from state management.
This pattern is applied by many popular web frameworks such as [Vuex](/languages-and-frameworks/vuex.html), [Redux](/languages-and-frameworks/redux.html) or [Flux](/methods-and-patterns/flux.html).

Especially in [reactive](/methods-and-patterns/reactive-programming.html) systems, this pattern helps to solve the task of maintaining decoupled, stateless and immutable components. The ways of implementing state management differs and depend on the specific requirements of the application at hand.

For distributed backend systems one might want to utilize [Akka's](/languages-and-frameworks/akka.html) cluster sharding module to elastically manage domain object states.