---
title: "LOKI"
ring: trial
quadrant: tools
featured: true
---

Archiving indexed log-data with a system like Elastic Search can be expensive and archiving it as simple text files makes it hard to query them. [Loki](https://grafana.com/oss/loki/) solves this issue by adding a reference database based on kubernetes-labels to each log-line similar to prometheus, but holding the log-data inside a simple blob-storage like s3. This allows the user to query the data by pre-defined labels and keeps the costs for indexing low.

Another benefit is the fact that does not have an endpoint for mutating log-data wich makes the data immutable from a potential compromised system.

We at AOE are using it for longer term log-archiving in severaly kubernetes-clusters.