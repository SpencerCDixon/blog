---
title: Deploy Buffalo Go App To Heroku
date: '2017-04-09T18:06:15.727Z'
layout: post
description: Tutorial on how to deploy a buffalo application to heroku
tags: 'tutorial, buffalo, golang'
path: /blog/deploy-buffalo-go-app-to-heroku/
---

The last few weeks I've been really excited about leveling up in Golang due to a new web
framework called [Buffalo](gobuffalo.io).  It promises the speed of Rails
development with the speed of Golang.  Exactly what I've been looking for in
future backend work.

One of my friends needed a simple web app built so I used that as an opportunity to test out Buffalo.  In a future
post I'll be going in-depth into how I built the site.  For now, I just want to
document the deployment process.

I couldn't find any deployment docs (project is still super new) but the creator of Buffalo, Mark Bates, was nice enough to
help me get it set up on heroku.  Here is the process of how I did it in case
others are interested in deploying their Buffalo apps to heroku as well:

:::info
I'm assuming you already have your buffalo app built and functional.
:::

## Deploying Buffalo To Heroku
Create the heroku app with a special binary buildpack:
```sh
$ heroku create <App Name> --buildpack https://github.com/ph3nx/heroku-binary-buildpack.git
```

Add path to our app binary:
```sh
$ heroku config:set PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/<APP NAME>/bin
```

Set go to production.  This will use the production database settings in Buffalo, etc.
```sh
$ heroku config:set GO_ENV=production
```

Build the buffalo binary for linux and zip up assets. Output the binary and call it 'heroku':
```sh
GOOS=linux buffalo build -z -o bin/heroku
```

Create Procfile that will be run in heroku.  We'll use the new binary called
'heroku' we just created:
```
// Procfile
web: bin/heroku
```

Push code up to heroku:
```
git add -A
git commit -m "Binary deployment"
git push heroku build:master --force
```

Run any database migrations:
```
heroku run bin/heroku migrate
```

Get heroku running:
```
heroku ps:scale web=1
```

Open up your new application!
```
heroku open
```

## Troubleshooting
During this process I ran into a few issues.  The `sqlite3` package was
preventing the buffalo build process to complete.  To get around this I just
deleted the file causing issues and everything chugged along smoothly.

```
$ rm ../../mattn/go-sqlite3/sqlite3_go18.go
```

## Conclusion
As someone with very little Go experience I was quite pleased to be able to
build the entire app and get it deployed in a weekend.  Definitely going to
continue using Buffalo in future projects!
