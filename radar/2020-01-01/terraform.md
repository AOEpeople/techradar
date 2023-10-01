---
title:      "Terraform"
ring:       adopt
quadrant:   "platforms-and-aoe-services"
tags:       [cloud, ci]
---

Terraform is an open-source infrastructure as code (IAC) tool developed by HashiCorp. It is used for provisioning and managing infrastructure resources in a declarative and version-controlled manner. Terraform allows users to define infrastructure configurations as code, specifying the desired state of their infrastructure, and then automatically creates, updates, or deletes resources to achieve and maintain that desired state.

Key characteristics and features of Terraform include:

1. **Declarative Configuration:** Terraform configurations are written in a declarative language, specifying what infrastructure should look like rather than how to create it. Users define the desired end state, and Terraform figures out the necessary actions to achieve that state.

2. **Infrastructure as Code (IAC):** Terraform configurations are written in code, which means they can be version-controlled, reviewed, and collaborated on like any other software codebase. This enables infrastructure to be treated as code, improving repeatability and consistency.

3. **Multi-Cloud and Multi-Provider Support:** Terraform supports multiple cloud providers (such as AWS, Azure, Google Cloud Platform), as well as on-premises and third-party services, making it a versatile tool for managing diverse infrastructure environments.

4. **Resource Dependencies:** Terraform understands dependencies between resources, ensuring that resources are provisioned or updated in the correct order based on their relationships.

5. **Plan and Apply:** Terraform provides a "plan" step that previews the changes it will make to the infrastructure before applying them. This helps users understand the impact of their changes and avoid unwanted modifications.

6. **State Management:** Terraform maintains a state file that tracks the current state of the infrastructure. This allows it to determine what changes are needed to bring the infrastructure to the desired state.

7. **Modularity and Reusability:** Terraform configurations can be modularized, allowing users to create reusable modules for common infrastructure patterns, which promotes code reusability and maintainability.

8. **Community and Ecosystem:** Terraform has a large and active community that contributes to the development of provider plugins, modules, and best practices. This ecosystem enhances Terraform's flexibility and functionality.

Terraform is widely used by DevOps teams and infrastructure engineers to automate the provisioning and management of cloud resources and infrastructure components. It simplifies infrastructure management, reduces manual intervention, and improves consistency across environments, making it an essential tool in modern cloud-native and infrastructure automation workflows.
