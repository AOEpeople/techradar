---
title:      "Harbor"
ring:       trial
quadrant:   platforms-and-aoe-services
tags:       [devops]
---

We continue to use [Harbor](https://goharbor.io) in our projects.
Since the last iteration of the AOE Technology Radar, we have discovered existing and new features that we deem useful:

- an official [Terraform provider](https://registry.terraform.io/providers/goharbor/harbor/latest) for provisioning of Harbor resources via Infrastructure as Code (IaC)
- [Proxy Cache](https://goharbor.io/docs/latest/administration/configure-proxy-cache/) projects as pull-through caches for public container registries that can amongst others be used to reduce external network load
