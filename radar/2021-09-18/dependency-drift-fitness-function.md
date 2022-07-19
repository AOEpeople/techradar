---
title: "Dependency drift fitness function"
ring: trial
quadrant: techniques
featured: true
---

Dependency drift means that libraries that are used for a project are out-of-date. A fitness
function is trying to put a value to a check that is run, so that would be in this case the drift
that is determined for the used libraries. A simple approach would be to count the number of
out-dated libraries.

The way to minimize dependency drift is to ensure that there is a (automated) process in place for
updating dependencies. An automated approach can be setup using Renovate so that dependencies are
checked and updated regularly.