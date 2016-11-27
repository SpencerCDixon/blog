---
layout: post
title: Converting Octopress To Middleman With Vim Macros
date: 2015-08-16 
path: "/blog/converting-octopress-to-middleman-with-vim-macros.html"
tags: vim, middleman
---

Converting from Octopress to Middleman was one of the best decisions I've ever
made.  I finally found a blogging platform that integrates seamlessly into my
everyday workflow as a Rails developer.  One thing I wasn't looking forward to
though was converting all my old Octopress posts into the proper Middleman format.
Thank god for Vim macros.

A Vim macro defined by [their wiki](http://vim.wikia.com/wiki/Macros):

>  Recording a macro is a great way to perform a one-time task, 
>  or to get things done quickly when you don't want to mess with Vim script or 
>  mappings, or if you do not yet know how to do it more elegantly.

Essentially, a macro is just a sequence of vim commands you record and then 
reapply somewhere else.  If you're familiar with the `.` vim command, it's just
the period command on steroids.

## Front Matter Before And After 

Here is an example of what the original Octopress YAML front matter looked like:  

```ruby
---
layout: post
title: "Gosu Tutorial"
date: 2014-10-11 11:28:50 +0800
comments: true
categories: ruby, gosu, tutorials
---
```  
This is what I needed the front matter to look like for Middleman:

```ruby
---
title: Gosu Tutorial
date: 2014-10-11 
tags: ruby, gosu, tutorials
---
```  

As you can see they're very similar.  After removing a few lines, getting rid of
some quotes, and re-naming categories to tags it should be good to go for
Middleman.

## Creating The Macro

To start recording a macro you press `q` and then any other letter you want to
bind that macro to.  For this example I'm going to use `r` for replace.

Here are all the steps of the macro annotated for clarity:  

```vim  
qr   # start recording macro with cursor on line one  
j    # move down a line to 'layout: post'  
dd   # delete that line since I don't need it   
f"   # go to the first double-quotes  
x    # delete the double quote  
f"   # go to the next double quote  
x    # delete it  
2j   # move down to the 'comments: true' line  
dd   # delete it  
j    # move down to 'categories' line  
cw   # change word 'categories'  
tags # type out tags to be used by Middleman  
esc  # exit insert mode  
q    # stop the recording  
```
Now that we have our macro built we can apply it to any files that need to be
converted by typing `@r`.  Two letters to change 5-6 lines of text into the
exact format we need.  That is strategic laziness at its finest! 

