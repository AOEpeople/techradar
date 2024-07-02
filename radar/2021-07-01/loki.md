---
title:      "Loki"
ring:       trial
quadrant:   tools
tags:       [devops]
---

Archiving indexed log data with a system like [Elasticsearch](/platforms-and-aoe-services/elasticsearch/) can be expensive, and archiving it as simple text files makes it hard to query. [Loki](https://grafana.com/oss/loki/) solves this issue by adding a reference database based on [Kubernetes](/platforms-and-aoe-services/kubernetes/) labels to each log line, similar to [Prometheus](/platforms-and-aoe-services/prometheus/), but storing the log data inside a simple blob storage like AWS S3. This allows the user to query the data by predefined labels and keeps the costs for indexing low.

Another benefit is that Loki does not have an endpoint for mutating log data, making the data immutable from a potentially compromised system.

At AOE, we use Loki for long-term log archiving in several Kubernetes clusters.
