---
title:      "Service Mesh"
ring:       adopt
quadrant:   platforms-and-aoe-services
tags:       [architecture, devops, security]
---

Service Meshes are part of all our Kubernetes implementations now. We value the additional security features they provide to our platforms.

We are using [Istio](https://istio.io/) on multiple production clusters and are assessing [Cilium](https://docs.cilium.io/en/latest/network/servicemesh/) as it also improves on Kubernetes' NetworkPolicies. We also consider [Linkerd](https://linkerd.io) a good candidate when looking for a Service Mesh for your project.
