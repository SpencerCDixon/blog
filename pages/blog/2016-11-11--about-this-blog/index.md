---
title: About This Blog
date: '2016-11-26T22:46:52.358Z'
layout: post
featured: true
path: "/blog/about-this-blog/"
---

This is a self-referential blog post about this blog (...I've been reading too much [GEB](https://www.amazon.com/G%C3%B6del-Escher-Bach-Eternal-Golden/dp/0465026567)).  A post about how to get the most from other posts.
In the spirit of [Simon
Sinek](https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action), I'll start with **why**.  Then
I'll cover **how** I created this blog and tips for getting the **most out of it**.
Finally, I'll delve into **where** it's going.  

If you don't really care why I created this blog and just want to learn how to
get the most out of it, [feel free to skip ahead.](#getting-the-most-out-of-posts)  If you're super nerdy like me and just
want to know how the blog was built [you can jump to that
section.](#how-this-blog-was-built)

## Starting With Why
My _Why_ has many layers.  Initially, I thought my _Why_ was to help separate my
time from income.  For the last year or so I've been [using this chrome extension
Motivation](https://chrome.google.com/webstore/detail/motivation/ofdgfpchbidcgncgfpdlpclnpaemakoj?hl=en). It has made me way more present to how little time we have on this
planet.  The conclusion I came to is that the amount of time I'd have to put
into this blog to make it profitable compared to contract work is absurd.  Therefore I'm
definitely not doing it for some sort of payout.

So I asked why again. 

And again.

The next layer I peeled back was another selfish one: _to learn_.  The philosophy
"To teach is to learn" has been distilled into my psyche.  By writing blog posts
about educational content not only could I improve my writing skills but it
would also force me to understand the material at a deeper level.

The reality (at least for me) is there are lots of different mediums I could use to start
teaching again that don't require me working on my writing skills. (I.E.
volunteering my time at the bootcamp I used to teach at.  Or giving talks at
meetups)

Back to the drawing board.  **Why do this?** 

I thought about why I got into programming in the first place.  My primary
reasons were for scalability of inspiration and to acquire mastery of my machine.  In management and sales, even if I
was the best manager in my company, I could only positively impact maybe 200
sales representatives a year.  Programming gave me access to billions of people
not hundreds.  

There was also this extreme desire to truly master my machine.  To be able to
get my computer to _work for me_ and not just _with me_.  To think of an idea
and then make it a reality.  After acquiring these basic computer skills I realized they were
something I wished everyone had.  

And there it was.  My _Why_.

_My driving force for writing this blog is to learn in public, to be vulnerable, 
and along the way hopefully inspire and motivate other
people to develop new skills and master their machines.  If I can do it so can
you._ 

## Getting The Most Out Of Posts

Scattered throughout posts are different alert boxes.  The green ones have
tips that you may find useful like this:

::: tip
An alias for `npm install <package> --save` is `npm i <package> -S`
:::

Blue boxes with the info icon are to display pieces of information that may or
may not apply to you... for example:

::: info
Make sure to use node version > `6.2.2`
:::

Red alert boxes have information you should **definitely** read because it could
be very important or dangerous.

::: warning
Never type `rm -rf ~`. Understand what commands do before copy/pasting from the
internet!
:::

**Errors & Mistakes** 

Inevitably you will encounter some spelling and grammatical errors (after all
one of my primary 'Why's is to become a better writer).  When they arise feel
free to leave a comment and I'll fix it up or you can even submit a [Github Pull
Request to fix the issue yourself!](https://github.com/SpencerCDixon/blog/pulls)

**Sharing & Comments** 

Most titles will have a little paper clip looking thing to the right of them that
looks like 🔗.  If you click on it you will be able to link to that section of
the blog post which can be useful when sharing URLs with friends and colleagues.

Additionally, at the bottom of every post are some social sharing icons you can
use to spread the love.  If a post was useful and helped you solve a problem,
consider paying it forward and sharing with others :smile:.  Sharing is caring!  

Absolutely hate and disagree with the things I'm writing?  No problem.  Leave a
comment and I'll gladly consider your point of view.  If you're a troll I'll just ignore you.

## Design Inspiration
There is clarity in simplicity.  When deciding how to design the blog I wanted
it to be as simple as possible so the focus could be on the content.  I
accumulated inspiration from many different sources but here a few that stood
out:

* HBO NOWs website.  Liked their nav layout, logo design, and font selections.
* T.J. Holowaychuks [Apex Ping](https://apex.sh/ping/).  Loved the minimal design and subtle css
    animations.
* The Medium blogging platform.
* Jeff Atwood's [Coding horror](https://blog.codinghorror.com/) blog.

## How This Blog Was Built

With :heart: and :coffee:. 

It uses [Gatsby.js](https://github.com/gatsbyjs/gatsby) to generate the static site.  Working with Gatsby has been 
an absolute pleasure.  Previous versions of this blog have been made with
Jekyll, Octopress, and Middleman but working in React + Gatsby has been the most fun.

[Netlify](https://www.netlify.com/) is what I use to deploy the site.

::: info
You can find the [source code for the blog here.](https://github.com/SpencerCDixon/blog)  
:::

In case you're too lazy to read the `package.json` here are some of the more
well known libraries used:

* `react-helmet` - used for the meta tags
* `react-disqus-thread` - used for adding disqus comments
* `markdown-it` - used for generating the markdown into blog posts
* `highlight.js` - used for code syntax highlighting
* `react-headroom` - used for the medium like nav bar that disappears/appears

## Where This Blogs Going
There are a plethora of features I'd like to add to the blog.  Most can be found
in the issues [section of the Github repo.](https://github.com/SpencerCDixon/blog/issues)  
