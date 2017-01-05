---
title: Effectively Integration Testing React Apps
date: '2017-01-05T12:03:36.439Z'
layout: post
description: "How to set up integration testing with react apps and tips for writing effective tests."
tags: 'testing, react, integration, tutorial'
path: /blog/effectively-integration-testing-react-apps/
---

When looking for a solid resource on integration testing React apps I had a
really difficult time.  Enzyme and Jest's snapshot testing are fantastic but
sometimes you really just want full end to end tests.  This tutorial aims to
help you get set up, provide some tips on writing clean tests, and give you an
example of how I use the power of React to make my integration tests even
better.

::: info
I'll be using Node `V7.2.1` for the tutorials. Anything >6 should be fine though.
:::

## TOC

* [Setting up webdriver]()
* [Creating usful React components for writing tests]()
* [What are page objects and how to use them]()
* [Conclusions]()

Selecting tools can be daunting.  There is Selenium, Webdriver, Webdriverio,
Nightwatch, Cypress.io, and probably many more I don't even know about.
Initially I got extremely bogged down by which tool to use to write my
integration tests.  I experimented with a few of them and found [Webdriverio]()
to be easy to set up and had the cleanest API docs.  I also liked how it runs in
a synchronous mode which will play nicely with newer devs and/or a QA team in
India.

## Setting up Webdriver.io

## Creating Useful React Component for Tests

## Using Page Objects Effectively

## Conclusion
