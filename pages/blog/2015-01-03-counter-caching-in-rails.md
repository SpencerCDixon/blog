---
layout: post
title: Counter Caching in Rails
date: 2015-01-03 
path: "/blog/counter-caching-in-rails.html"
tags: rails, ruby
---

## Finding Number Of Answers For A Question In Rails

Earlier this week I was given a pretty straightforward user story of figuring out how many Answers a given Question had received.

Wrote my acceptance tests and then was surprised at how complicated this was to actually implement.  After devouring the Active Record documentation in hopes of finding a method that would leverage the two models associations I ended up bootstrapping a method to get it to work:

```ruby
# in Question Model:
def self.unanswered
  unanswered = []
  Question.all.each do |q|
    if q.answers.count == 0
      unanswered << q
    end
  end
  unanswered
end

```
<!--more-->

I knew that I hated this method and it had N + 1 written all over it.  After discussing solutions with one of our Senior team members we ended up writing this gnarly SQL statement to find the ``id``'s of all the questions with no answers associated to them.

Finally, we decided it would be best to just implement a Counter Cache on the Question model.  Here's how to do that:

```ruby
class AddAnswerCountToQuestions < ActiveRecord::Migration
  class Question < ActiveRecord::Base
    has_many :answers
  end

  class Answer < ActiveRecord::Base
    belongs_to :question, counter_cache: true
  end

  def up
    add_column :questions, :answers_count, :integer, null: false, default: 0

    Question.pluck(:id).each do |id|
      Question.reset_counters(id, :answers)
    end
  end

  def down
    remove_column :questions, :answers_count
  end
end
```

### What is this migration doing?

*  Adding a ``answers_count`` column to the Questions model so that everytime an answer gets created for a question that will go up by 1.  It also sets a default value of 0 since when a Question gets created it has no answers yet.  
*  Lines 13-15 then go back through all prior Questions created and reset the new ``answers_count`` column to 0 so we don't have any issues with legacy questions.  
*  The down method is set up for if we have to rollback changes ever.  
*  Finally, the reason we have the two classes inside our migration is so that if we ever change the name of Question, it won't ruin the migration and throw errors.  

### Changing The Real Models

In our migration we adjusted the ``belongs_to`` method to accept the ``counter_cache: true`` but that was just for our dummmy models in the migration.  Now we need to change our actual models like this:

```ruby
class Answer < ActiveRecord::Base
  belongs_to :user
  belongs_to :question, counter_cache: true
end

class Question < ActiveRecord::Base
  has_many :answers
end
```

The last thing to finish the original user story is to refactor that original method to implement the counter cache.  Here is how I implemented it:

```ruby
def self.unanswered
  where(answers_count: 0)
end
```

Much, much cleaner than the original method!
