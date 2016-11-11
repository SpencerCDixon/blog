---
layout: post
title: The Stages of Vim
date: 2015-01-25 
tags: vim 
---

So you're finally fed up with alerts asking you to buy Sublime text or random errors with Atom?  Time to transition to the editor that has been around for over 30 years Vi Improved, also known as VIM. Getting started with VIM can be difficult so I decided to write a post on how I approached it.  The first thing to understand is learning VIM is NOT easy but once you do it you will never regret it.  Here are the stages of VIM:

### Optimistic Hatred
At this point you see the value in learning VIM but the learning curve is making you hate it.  Every time you start to use it you get frustrated and just open a text editor your comfortable with.  The idea of using hjkl to move around makes you crazy.  Why would they do that!?  The best way to overcome this stage is to just go cold turkey.  Declare to the world that you will no longer ever use your old text editor.  It's VIM or no programming.  The only way you are going to climb the wall is if you completely dedicate yourself and stop trying to learn it here and there when you have time. 

#### Resources For Stage 1:

*  Vimtutor.  Enter your terminal and type ``vimtutor`` + enter.  Follow that tutorial. Do it twice.
*  [Vim Novice Tutorials](http://derekwyatt.org/vim/tutorials/novice/) - Watch all these videos.  Take notes, pause the videos and try to do what is being taught.
*  Get your VIM set up properly: [Here are my dotfiles](https://github.com/SpencerCDixon/dotfiles)  Clone this repo down to your home directory (~) and then run ./install.sh to execute the script that will get you set up.
*  [Vim Adventures](http://vim-adventures.com/) - more practice with hjkl, fun when you're bored of learning from other materials.
*  Remap your capslock to be something useful: control. You will be hitting ctrl + c constantly in vim to switch modes.  Having caps lock as control can help with keyboard shortcuts outside of VIM as well. Ctrl + tab will cycle your tabs in chrome.
*  The hardest thing to overcome in the beginning is just getting VIM set up properly.  Here are some of the MUST have plugins that I use: NerdTree, ctrlP, and vim-ruby
*  Install the vimium plugin on chrome.  Now you can practice your vim everytime you search the internet! [Vimium download](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en)

There are many more plugins you will want.  For now what's important is you can access your file tree using NerdTree, you have a way to search through directories using ctrlP, and you have some ruby helpers.  Focus your attention on overcoming hjkl and learning basic commands like d, y, c, w, p, etc.

