---
title:      "Terraform / OpenTofu"
ring:       adopt
quadrant:   platforms-and-aoe-services
tags:       [academy training, devops]
featured:   false
---

Terraform has become a de facto standard as a cloud-provider-agnostic Infrastructure as Code tool
in recent years.

Unfortunately, the [license change for Hashicorp products in August 2023](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license)
has caused [some](https://blog.gruntwork.io/the-future-of-terraform-must-be-open-ab0b9ba65bca)
[turmoil](https://zeet.co/blog/the-impact-of-hashicorps-license-change-on-terraform-users-and-providers-what-you-need-to-know)
within the Open Source community. Terraform can no longer be considered truly Open Source. Of particular concern are the
[usage limitations that prohibit "competitive offerings" to HashiCorp's products](https://www.hashicorp.com/license-faq#usage-limitations).
The vagueness of this definition, coupled with the fact that HashiCorp can change their interpretation of what constitutes a
"competitive offer" at any time, poses a potential liability for agencies and their customers.

As a result, we are currently evaluating [OpenTofu](https://opentofu.org) as a drop-in replacement
for Terraform. OpenTofu is an open-source fork under the umbrella of the Linux Foundation, created from the last commit before Terraform's license change.
