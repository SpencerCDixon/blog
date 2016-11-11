---
layout: post
title: Creating a DSL in Ruby
date: 2015-07-01
tags: ruby, rails
---

Recently I built a small DSL for work that allows users to sync data to MongoDB
from any external API.  It was my first time making a DSL so I decided to
document a few things that helped me get started:

#### Using Ruby's `included` hook to extend class methods

```ruby
module CustomDsl
  def included(base_class)
    base_class.extend(DslClassMethods)
  end

  def instance_method_here
    self.class.get_class_method
  end
end

module DslClassMethods
  def class_method_name(conn)
    @_class_method_name = conn
  end

  def get_class_method
    @_class_method_name
  end
end
```

So now when the `CustomDsl` gets included in one of my classes that uses the Dsl
it will also extend the `DslClassMethods`.  Extending that module will make all
methods defined in it class methods instead of instance methods.

```ruby
class Example
  include CustomDsl

  class_method_name :apple
end

foo = Example.new

foo.instance_method_here # => :apple
```

One thing to note is that the instance variable `@_class_method_name` is
somewhat deceiving.  Since DslClassMethods is being extended it's actually an instance
variable on the Class `Example`, not a normal instance variable.

#### Usings macros for configuration

I ended up using class macros for a lot of configuration.  It was important to
me that end users of the DSL be informed of error messages if they had a typo or
were missing key components to make the DSL work.  For example, if a class was suppose to use a
specific Connection class to hit an API, I wanted to confirm that 
Connection class actually existed.  The implementation I choose to use involves
some simple metaprogramming and `Object.const_get`. 

```ruby
module CustomDsl
  def included(base_class)
    base_class.extend(DslClassMethods)
  end
  # ... omitted ...
end

module DslClassMethods
  def primary_connection(conn)
    confirm_symbol_or_string!(conn)
    const = conn.to_s.split('_').map(&:capitalize).join
    Object.const_get(const)
    @_primary_connection ||= conn.to_sym
  rescue NameError
    raise UndefinedConnectionClass, 
      "#{self.class} wants to use #{const} as its primary connection but #{const} has not yet been defined"
  end
end
```
`primary_connection` is now able to take symbols or strings but it makes sure to
always save the connection as a symbol.  If `Object.const_get` is unable to find
the connection class then I rescue the `NameError` and provide a more
descriptive error message.  The final implementation for this macro might look
something like:

```ruby
class SlackDataSource
  include CustomDsl
  primary_connection :slack_connection
end
```

This is really just the start but hopefully there is enough context for someone
interested in making their own DSL to have some direction.
