---
title:      "Software Bill of Materials (SBOM)"
ring:       assess
quadrant:   platforms-and-aoe-services
tags:       [devops, security]
---

A Software Bill of Materials (SBOM) is an artifact that consolidates information about the dependencies of a software.

Multiple standards that define the contents and format of SBOMs exist.
The most prominent open-source formats include:

- [CycloneDX](https://cyclonedx.org/) (OWASP): designed in 2017 with the goal to identify vulnerabilities in the software supply chain.
- [SPDX](https://spdx.dev/) (Linux Foundation): mainly focused on license compliance in the context of open source software. Support for tracking security vulnerabilities has been added in 2016 with SPDX 2.1.

While the goals of these SBOM formats vary, they both support

- automated generation of SBOMs from source code and
- machine-readable output to enable automated processing of SBOMs.

We see potential for SBOMs to improve software supply chain security by facilitating

- transparency regarding direct and transitive software dependencies,
- automated detection of software dependencies with known vulnerabilities and
- interoperability of security tools that support the same SBOM standards.
