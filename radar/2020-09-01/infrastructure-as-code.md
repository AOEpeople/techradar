---
title: "Infrastructure as Code"
ring: adopt
quadrant: techniques
featured: true
---

All cloud infrastructure should be provisioned and maintained using Infrastructure as Code (IaC). To
manage this we will use templating services provided by the cloud provider. For <a href="aws.html">AWS</a> we will use
Cloudformation and for <a href="azure">Azure</a> resources, we will use ARM templates. If possible use policies to
disable manual changes in cloud portals and force scripted modifications.