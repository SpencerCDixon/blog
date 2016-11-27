---
layout: post
title: Integrating Flowdock Push API Into Rails
date: 2015-01-05 
path: "/blog/integrating-flowdock-push-api-into-rails.html"
tags: rails, ruby, API, flowdock
---

Integrating the Flowdock Push API is a lot easier than I thought it would be.  I decided to document how to get it set up.

### Step 1 - Add Gems

Add these gems to your Gemfile:   

```ruby  
gem 'flowdock'  
gem 'dotenv-rails', :groups => [:development, :test]
```  

Then run `bundle`.  

### Step 2 - Find Specific Flow Token 

Next we need to configure our `.env` file to have the correct token for the Flow we are trying to send messages to.  To find a specific Flow's token you:

*  Go to flowdock and find the correct flow.
*  Click on the gear next to the Flow's name
*  Click on 'Flow Settings'
*  Go to 'Inbox Sources'
*  There will be a Flow Email and Flow API token.  Copy the Flow API token so it can be put in your ``.env`` file.

If you havn't already, create a .env file in the main directory of your Rails app.  **IMPORTANT**: make sure to put .env in your .gitignore file so you don't leak API tokens onto your github.

Copy the flow token into your `.env` file:  

```ruby  
# .env file
FLOW_TOKEN=<paste your flow token here>
```

### Step 3- Set Up Routes
Restart the server so the token will be available to you.  Now we need to set up a route that will handle the POST request for sending the message to the flow.  

The form for sending a message is in the Dashboard of my app so this is the route I created:  

```ruby  
# config/routes.rb
post '/dashboard/send_flow' => "dashboards#send_flow"
```

It is configured to hit my DashboardsController and execute the #send_flow action.

### Step 4 - Set Up Controller

Here is what the #send_flow action looks like:

```ruby
def send_flow
  flow = Flowdock::Flow.new(:api_token => ENV['FLOW_TOKEN'],
      :source => "LaunchPairs", :from => {:name => current_user.first_name, :address => current_user.email})

  flow.push_to_chat(:content => params[:flow][:question], :external_user_name => current_user.first_name.gsub!(/\s/, ""))

  flash[:success] = "Your question was sent! Check the flow for any answers"
  redirect_to dashboard_path
end 
```
First we are creating a new flow using the proper Flow Token which we set up earlier in the ``.env`` file. The dotenv-rails gem loads that environment variable so it's available to call in the action.  

Next we call the ``push_to_chat`` method on the flow and provide the content for the message.  The params[:flow][:question] is coming from my form that hit's this action.  The final step, is to set up the form to hit this route.

### Step 5 - Build Form For Sending Questions

How you build the form is up to you as long as it hits the correct controller and action.  Here is what mine looks like:  

```ruby  
<%= form_for 'flow', url: { controller: :dashboards, action: :send_flow } do |f|  %>
  <%= f.text_area  :question %>
  <%= f.submit "Ask Your Question", class: "button alert" %>
<% end -%>
```



