---
title:      "Terraform"
ring:       trial
quadrant:   tools
tags:       [academy training, devops]
---

For the infrastructure of our OM3 projects, we operate multiple Kubernetes clusters. To orchestrate the infrastructure provisioning, we quickly decided to use [Terraform](https://www.terraform.io). Terraform enables us to easily manage our infrastructure, from AWS EC2 instances to RabbitMQ message queues. Additionally, the Kops installer for Kubernetes on AWS utilizes Terraform as its main building block, allowing us to trigger Kops via Terraform.

We combine Terraform with [Helm](/platforms-and-aoe-services/helm/) to manage similar parts of the infrastructure. For example, a shared file with domain name to application mappings allows us to provision Route 53 DNS entries via Terraform and then deploy Kubernetes Ingress definitions with the appropriate hostname-to-service mapping via Helm.
