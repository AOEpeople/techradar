---
title:      "Terraform"
ring:       adopt
quadrant:   platforms-and-aoe-services
tags:       [academy training, devops]
---

[Terraform](https://www.terraform.io/) is a tool for building, changing, and versioning infrastructure using the infrastructure-as-code pattern. Terraform supports popular service providers like AWS, Google Cloud Platform, Azure, and many more.

Infrastructure is described in configuration files through HCL (HashiCorp Configuration Language), which offers a set of string interpolations and built-in functions, including conditionals and loops. Terraform validates configuration files before attempting to run updates, checking not only that all files use the correct syntax, but also that all parameters are accessible and the configuration as a whole is valid. In Terraform, you can (and should) run a `plan` step before applying any changes. This step precisely outlines what is going to change and why.

Another feature of Terraform is its facilitation of code reuse through modules. This allows for a lot of flexibility in structuring projects in the way that makes the most sense.

At AOE, we utilize Terraform across multiple teams to provision infrastructure and manage its lifecycle on cloud platforms such as AWS, as well as for platforms such as Kubernetes.
