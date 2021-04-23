---
title:      "Open Policy Agent"
ring:       assess
quadrant:   tools

---

[Open Policy Agent](https://www.openpolicyagent.org/) (OPA) is a framework and language which allows to model and evaluate policies access services. The underlying expression language *rego* is purpose-built for the policy evaluations and implements the **Policy As Code** patterns. 

The utility of OPA and Rego comes from the various integrations into other cloud-natives services and tools. It can be part of the Kubernetes Admission Control process, can be used for authorization decisions within a Service Mesh or could be part of infrastructure evaluation pipelines. 

We use OPA in some of our infrastructure pipelines to ensure that changes don't have undesired impact or within Kubernetes to evaluate the overall conformity of our deployments with the gives policies.