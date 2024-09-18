```yaml
site:
    framework:
        - Jekyll
        - Hugo
        - 11ty
    programming-language:
        - ruby
        - javascript
        - python
        - golang
    3rd-party-integrations:
        - New Relic
        - Zendesk
        - GovDelivery
        - Search.gov
        - DAP
    testing-suites:
        - Codeql
        - Snyk
        - Dependabot

---
```
# Configuration Management Plan

## Introduction

This project uses Agile development methodologies, and this configuration management plan outlines the manner in which the team - program management and contractors - establish and maintain consistency and reliability of the system's performance and its functional attributes as they relate to requirements, design, and operational maintenance throughout the system's lifecycle.

## Roles and Responsibilities

- Developers/Content Creators – create code changes and tests, provide code reviews, and prepare Pull Requests for deployment. Peer Review and merge production deployments.
- Website Manager – responsible for the website's compliance and content.

## Scope

This website conducts configuration management through a Software Development Lifecycle (SDLC):

| **Configuration Item** | **Resource** |
| --- | --- |
| Programming Language | {{ site.programming-language }} |
| Static Site Generator | {{ site.framework }} |
| 3rd party Integrations | {{ site.3rd-party-integrations }} |
| Plugins | {{ site.plugins }} |

This CM Plan describes policies and practices for common source control, build automation, automated migration and deployment, test automation, and continuous integration. Automation of builds and deployments are both done using Ansible, and are discussed together in this plan. In addition, the workflow for change scoping, requests, testing/approvals, and deployment is described.

All changes must be reflected in GitHub. As an agile team, all development cycles are incremental, there is no final push to production followed by a maintenance phase, as in a waterfall style software development.

## Common Source Control

To ensure continuity and reduce the risk of loss of work, all developers check their code in to GitHub as Pull Requests. As such, the entirety of the codebase is discoverable at any time and all changes are tracked on a change by change basis. All code is versioned via Git, including application code, tests, builds, and deployment automations. Continuous Integration is performed by CircleCI and all Pull Requests are reviewed under an enforced peer review process requiring a developer's approval before adoption into the code base.

## Build Automation

All physical hardware and networking is managed by Cloud.gov.

## Test Automation

The application provisioning code is run through automated testing using {{ site.testing-suites }}. Continuous integration occurs on each Pull Request either proposed or merged, and all tests must pass before code can advance in the development lifecycle. Most code changes are either security fixes or improvements on existing features or functions, and new tests are written as needed for new features in the code.

## Continuous Integration

The iterative nature of agile development requires continuous integration.

In the event that a code change affects the System Security Plan (SSP), the affected control response is updated, and the ISSO and ISSM are alerted to the change by the PMO.

## Tools

The team uses GitHub to manage the product life cycle. This section identifies these tools and their purpose:

- Git –U ses Git to control versions of code. [GSA has an extensive organizational account on GitHub](https://github.com/GSA-TTS), which stores all code repositories for GSA's Cloud.gov pages applications. Git and GitHub track code changes at the commit level. Code branches for work in progress are synced to Github at least daily to minimize risk of loss of work.

## Change Management

Steps taken from a Pull Request for any change to application within our Production environment consist of the following workflow:
  - A continuous integration (CI) server handles automated tests of the committed changes to application code repositories or remote codebases. Those changes are manually reviewed and if accepted made as their own Pull request.
  - That PR is then run in continuous integration (CI) server to ensure they are valid and pass all applied testing and ansible playbook verification/test runs. If checks pass and a developer peer reviews and approves the Pull Request it can be merged into the "main" branch.
  - All changes are deployed from the develop branch to staging environment, and automated or manual tests and/or verifications are run to ensure intended changes are applied correctly.
  - Proposed changes are then discussed, any uptime concerns or timing preferences on deployment to production are communicated.
  - If there is agreement to proceed between 2 or more members then changes are applied to production, followed by active monitoring and logging to ensure there are no issues after deployment. If there are, changes can be reverted to the previous state.
