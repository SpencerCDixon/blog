---
layout: post
title: Image Preview With Carrierwave And Rails
date: 2015-10-01 
path: "/blog/image-preview-with-carrierwave-and-rails.html"
tags: ruby, tutorials, rails
---

::: info
**Note:** this assumes you already have carrierwave up and running.  For help
with that see the documentation on the
[carrierwave](https://github.com/carrierwaveuploader/carrierwave) repo.
:::

The other day I implemented image preview using Carrierwave and I couldn't seem
to find any great tutorials/blog posts on how to do it.  Wanted to post how to
do it in case someone else was interesting image preview as well.

```erb
# ... rest of the form ...

# Your carrierwave image uploader
<div class="form-group">
  <img id="img_prev" width=300 height=300 src="#" alt="your image" class="img-thumbnail hidden"/> <br/>
  <span class="btn btn-default btn-file">
    Upload Avatar Image<%= f.file_field :avatar, id: "avatar-upload" %>
  </span>
  <%= f.hidden_field :avatar_cache %>
</div>
```

This is the javascript that will create an event handler on change for the file
uploading input tag and display the image on the screen.  I applied some basic
bootstrap classes to the previewed image to make it look nicer.

```javascript
$(function() {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#img_prev').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#avatar-upload").change(function(){
    $('#img_prev').removeClass('hidden');
    readURL(this);
  });
});
```

For more neat Rails Tips & Tricks [check out my repo on github.](https://github.com/SpencerCDixon/Rails-tricks)



