# 3. Use Federalist for hosting

Date: 2022-08-04

## Status

Accepted

## Decision

We propose using [Federalist](https://federalist.18f.gov/) to host tts.gsa.gov.

## Consequences

We predict that hosting tts.gsa.gov on Federalist will:

* Reduce the time, energy, and cost of compliance, since tts.gsa.gov will be able to inherit all or some of its ATO from the Federalist platform
* Improve tts.gsa.gov security posture, since the site will enjoy the security benefits of using shared Federalist infrastructure and deployment pipelines

This choice will limit the Content Management System (CMS) that TTS and/or its vendor will be able to use to update content. The choice of CMS will be limited to those that Federalist supports.

At this time, Federalist supports only Netlify, an open source content management system for your GitHub-based content. As a result, we may need to provide training and support on using Netlify and its GitHub-based workflows.

## External resources

* [Why Use Federalist? on federalist.18f.gov](https://federalist.18f.gov/documentation/why-use-federalist/)%
