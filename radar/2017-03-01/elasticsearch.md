---
title:      "Elasticsearch"
ring:       trial
quadrant:   platforms-and-aoe-services
tags:       [devops]
---

Elasticsearch is a REST-based search and analytics engine based on [Lucene](https://lucene.apache.org/). Unlike its competitor [Apache Solr](https://solr.apache.org/), it was developed from the beginning with clustering and scaling in mind. It allows you to create complex queries while still delivering results very quickly.

At AOE, we use Elasticsearch for logging as well as our own search solution, [Searchperience®](http://www.searchperience.com/). We recently moved the Searchperience stack from Solr to Elasticsearch and believe this was the right decision. Especially in terms of scaling, ease of use, and performance, Elasticsearch really shines. Additionally, the API design incorporates learnings from Apache Solr - for example, the queryDSL is a powerful way of describing different search use cases with highly flexible support for aggregations, etc.
