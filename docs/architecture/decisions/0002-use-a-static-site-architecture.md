# 2. Use a static site architecture

Date: 2022-08-04

## Status

Accepted

## Context

This decision was proposed in the context of Technology Transformation Services wanting a platform to host both current and future webpages at a single domain. We see the benefits of a static site architecture as:

* Reduced infrastructure costs
* Opportunities to add enhancements in the future
* Portability by having the content inside of Markdown files

## Decision

We propose using a static site architecture for tts.gsa.gov.

## Consequences

We predict that using a static site architecture will:

* Allow TTS to easily meet any high traffic needs
* Reduce the cost, pain, and delays of maintaining infrastructure in comparison with a more complicated CMS (Wordpress, Drupal, Joomla) architecture
* Improved security by presenting a reduced attack surface

## Alternatives

### Why not Drupal / Wordpress, especially if static site generator plugins are used?

Using a popular CMS like Drupal or Wordpress could provide a friendly editing experience for content authors. These CMS tools are widely used and better known compared to Netlify.

However, using one of these CMS tools would require us to run a server, which would require the team to undergo an ATO process unlikely to fit nicely within our project timelines. At this moment TTS doesn't offer a pre-ATO'ed Drupal or Wordpress with Federalist. Using a static site generator without a running server should decrease the time and effort involved in going to production by orders of magnitude.

### Why Eleventy vs. the other static site solutions that Federalist supports?

As of Jan 2022, Federalist supports a variety of static site solutions such as Jekyll, Gatsby, and Hugo.

We chose Eleventy because of its flexibility and for the large amount of JavaScript knowledge across TTS. Although Eleventy is newer, it's gaining adoption quickly and as this project matures there will be more and more examples and plugins to make use of.

### Federalist

A static site architecture is also a requirement for tts.gsa.gov to use Federalist, TTS's static site hosting solution. See [ADR No. 3, Use Federalist](./0003-use-federalist.md).
