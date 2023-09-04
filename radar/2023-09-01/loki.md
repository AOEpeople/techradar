---
title: "Loki"
ring: adopt
quadrant: platforms-and-aoe-services
featured: true
tags: [ devops ]
---

After very good experiences so far, we replaced our ELK stacks with Loki mainly for the following reasons:

* Loki is significantly cheaper than the storage requirements of Elasticsearch used in the ELK stack.
* The PromQL-like query language that is familiar to users of Prometheus, makes it easier for DevOps and SRE teams who
  are already using Prometheus for monitoring to work with logs.
* Loki's native integration with kubernetes simplifies the setup and configuration process.
* Loki typically requires less maintenance and overhead compared to ELK.
