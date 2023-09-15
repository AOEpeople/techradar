---
title:      "AWS Fargate"
ring:       adopt
quadrant:   "platforms-and-aoe-services"
tags:       [cloud]
---

AWS Fargate is a serverless container orchestration service provided by Amazon Web Services (AWS). It simplifies the deployment and management of containers by allowing users to run Docker containers without the need to provision or manage the underlying infrastructure. With Fargate, you can focus on defining and running your containerized applications while AWS takes care of the infrastructure management.

Key features and aspects of AWS Fargate include:

1. **Serverless Container Deployment:** Fargate abstracts the underlying infrastructure, such as EC2 instances, and allows you to deploy containers as tasks without needing to manage servers or clusters. You pay only for the resources (CPU and memory) your containers use while running.

2. **Container Compatibility:** Fargate supports Docker containers, making it compatible with containerized applications that are packaged using the Docker format. You can use Docker Compose or Kubernetes to define your application's container configurations.

3. **Resource Isolation:** Each Fargate task runs in its isolated environment, ensuring resource isolation and security between tasks. This makes it suitable for running multi-tenant applications securely.

4. **Automatic Scaling:** Fargate can automatically scale your application based on resource utilization or custom-defined scaling policies. This ensures that your containers have the required resources to handle varying workloads.

5. **Load Balancing:** Fargate integrates with AWS Elastic Load Balancing to distribute incoming traffic among your containers. This helps in achieving high availability and load distribution for your applications.

6. **Networking:** Fargate tasks can be connected to Virtual Private Clouds (VPCs) and can leverage features like security groups and network ACLs for network security. You can also use AWS PrivateLink to securely access services within your VPC.

7. **Logging and Monitoring:** AWS provides tools like Amazon CloudWatch for logging and monitoring your Fargate tasks and containers. You can collect logs and metrics to gain insights into the performance and behavior of your applications.

8. **Task Scheduling:** Fargate allows you to define task schedules using Amazon CloudWatch Events or other scheduling mechanisms. This is useful for running tasks at specific times or in response to events.

9. **Integration with Other AWS Services:** Fargate seamlessly integrates with other AWS services like AWS Identity and Access Management (IAM), AWS Secrets Manager, AWS Systems Manager, and more, allowing you to securely manage secrets, configurations, and automation tasks.

AWS Fargate is suitable for a wide range of use cases, including web applications, microservices, batch processing, and more. It offers a convenient and cost-effective way to run containers at scale without the operational overhead of managing container hosts.