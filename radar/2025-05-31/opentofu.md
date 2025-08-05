---
title:      "OpenTofu"
ring:       adopt
segment:    platforms-and-aoe-services
tags:       [devops]
---

We use OpenTofu for most new projects. It proofed to be a reliable and well-maintained Open-Source alternative to [Terraform](/tools/terraform/).

[OpenTofu](https://opentofu.org/) is a tool for building, changing, and versioning infrastructure using the infrastructure-as-code pattern. OpenTofu supports popular service providers like AWS, Google Cloud Platform, Azure, and many more.

Infrastructure is described in configuration files, which offers and built-in functions, including conditionals and loops. OpenTofu validates configuration files before attempting to run updates, checking not only that all files use the correct syntax, but also that all parameters are accessible and the configuration as a whole is valid. In OpenTofu, you can (and should) run a `plan` step before applying any changes. This step precisely outlines what is going to change and why.
