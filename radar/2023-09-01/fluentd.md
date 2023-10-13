---
title:      "Fluentd"
ring:       hold
quadrant:   tools
tags:       [devops]
---

[Fluentd](https://www.fluentd.org) is still a great tool to gather logs, transform them into any required format and distribute them to any logging backend.
But in recent years we oftentimes transitioned to [Grafana Loki and Promtail](/platforms-and-aoe-services/loki.html) for many reasons.

We've also learned that extensive parsing of logs upfront carries some risk of loosing logs and requires a lot of effort. This doesn't fit well with most projects.  
