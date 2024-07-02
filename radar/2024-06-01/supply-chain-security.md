---
title:      "Supply Chain Security"
ring:       adopt
quadrant:   methods-and-patterns
tags:       [devops, security]
---

Software supply chain security is a complex endeavor. Attack vectors range from external dependencies in source code to operating systems and tools used in build, test, and production environments. Compromise of a single stage of the supply chain may lead to compromise of the produced software and subsequently of customers that rely on it.

Over the last few years, successful attacks on large software vendors have demonstrated the potential impact of such attacks. For instance, the SolarWinds Orion software was [compromised](https://en.wikipedia.org/wiki/SolarWinds#2019%E2%80%932020_supply_chain_attacks) due to an insecure password that allowed attackers to inject a backdoor into software artifacts. Several SolarWinds customers, including US federal government agencies, were compromised as a result of this attack. The [xz backdoor](https://tukaani.org/xz-backdoor/) showed that malicious parties are also stepping up their efforts to place backdoors in widely used open-source software projects in ways that are very hard to detect and prevent.

Software libraries and other external dependencies are a major attack vector when building software. We use the following measures regarding external dependencies to improve supply chain security:

- Verify dependency artifact signatures and checksums to detect artifacts that were released or replaced by an attacker.
- Raise developer awareness regarding malicious dependencies and issues such as typosquatting in dependency package managers.
- Generate [Software Bills of Materials (SBOMs)](/platforms-and-aoe-services/sbom/) for transparency regarding used software dependencies and to support the automated detection of known vulnerabilities.
- Evaluate and reduce the number of external dependencies to minimize the attack surface.

We believe that supply chain security can only be achieved when taking every step of the supply chain into account. Therefore, we utilize the DevSecOps lifecycle and evaluate potential attack vectors and countermeasures for the complete software development and operation lifecycle. As a result, we use the following general measures to improve supply chain security:

- Secure build, test, and deployment environments with [Zero Trust](/methods-and-patterns/zero-trust/).
- Sign built software artifacts and verify the signature of artifacts before deploying them.
- Use static application security testing (SAST) and dynamic application security testing (DAST) to scan for known vulnerabilities and logic flaws before deploying artifacts to production environments.
