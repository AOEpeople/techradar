---
title:      "Azure Container Instances"
ring:       hold
quadrant:   platforms-and-aoe-services
tags: [devops]
---

We've previously used AWS Fargate when we didn't require full container orchestration and aimed for simplicity without managing the OS ourselves. When it came to Azure projects, we searched for a similar solution. After exploring the somewhat opaque list of options for running Docker images on Azure, we opted for Azure Container Instances, as they seemed to align most closely with AWS Fargate in terms of simplicity.

However, while it's easy to get a container up and running with Azure Container Instances, it appears that this service is still in its early stages of maturity. Some notable limitations include the inability to automatically register containers in internal networks with Azure Application Gateway, lack of support for internal DNS, occasional issues where containers need to be deleted and recreated instead of smoothly replaced, and unexpected container restarts during the night without clear prior announcements or post-incident explanations.

Another limitation is that volumes can only be stored on Azure File Shares and not on regular Azure Disks. This can pose challenges when running certain applications. Surprisingly, when compared to running the same Docker container on a virtual machine, Azure Container Instances may not even be more cost-effective.

Given these limitations and experiences, we would not recommend migrating critical workloads to Azure Container Instances.
