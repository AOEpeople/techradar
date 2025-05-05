---
title:      "API Testing"
ring:       adopt
quadrant:   methods-and-patterns
tags:       [testing, api, quality]
---

API testing is a crucial aspect of modern software development, ensuring that APIs function correctly, remain reliable, 
and maintain backward compatibility. At AOE, we have adopted API testing as a standard practice for all projects that 
expose or consume APIs.

### API Tests in Code

Embedding API tests directly into your codebase provides many benefits:

- **Version control**: Tests evolve alongside the API implementation
- **Automated validation**: Immediate feedback on API changes that might break contracts
- **Documentation**: Tests serve as executable documentation for API behavior
- **Regression prevention**: Early detection of unintended changes in API behavior

We recommend writing API tests at multiple levels:

### API Testing Tools

Several tools have proven particularly valuable for API testing:

#### Bruno

[Bruno](https://www.usebruno.com/) is an open-source API client that emphasizes a developer-friendly approach to API testing. 
Its key advantages include:

- Git-friendly collections stored in Markdown/JSON format
- Local-first workflow with no accounts or collections within any cloud required
- Supports complex environments and variable management
- Scriptable request pre/post processors
- Collection runner for executing test suites

#### Other options

There are also many other good solutions like [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) etc. 

### CI/CD Integration

A critical aspect of API testing is integrating tests into our CI/CD pipelines. Most of API testing tools provide a CLI
tool to run collections from the commandline.

These integrations allow for:
- Automated API validation in CI/CD pipelines
- Pre-deployment verification
- Scheduled testing for continuous monitoring
- Integration with test reporting systems
