---
title:      "Kubernetes"
ring:       adopt
quadrant:   platforms-and-aoe-services
tags:       [academy training, devops]
---

Kubernetes has evolved into the quasi-standard for container orchestration: Nearly every cloud provider offers managed Kubernetes, and even Docker Enterprise utilizes Kubernetes.

We run several production systems with Kubernetes and employ it in concepts such as:
- Utilizing "secrets" and "configmaps" to manage configurations for applications. By updating these resources with an automated configuration pipeline, you have an excellent method for configuration management.
- Implementing autoscaling of Kubernetes nodes and utilizing "horizontal pod scaling" within Kubernetes allows for elastic scaling.
- Leveraging support for managing permissions with OAuth, enabling you to secure Kubernetes with [Keycloak](/tools/keycloak/) (SSO).
- Utilizing Kubernetes' extensibility and API for automation and customization. There is a growing ecosystem around extensions, which adds additional features.
