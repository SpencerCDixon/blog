---
title: Rebuilding Redux
date: '2016-12-17T16:29:05.905Z'
layout: post
description: Screencast rebuilding a light version of redux for educational purpose.
tags: 'Redux, React, Screencast, Tutorial'
path: /blog/rebuilding-redux/
---

At the last [Boston React Meetup](https://www.meetup.com/boston-react/) I gave an impromptu talk where we rebuilt
[Redux](https://github.com/reactjs/redux)
from the ground up.  Many people found it useful so I decided to record a
screencast version for others who might be interested.  

@[vimeo](196092601)

Here is the source code from the video:

```js
// getState, dispatch, subscribe

function createStore(reducer, initialState) {
  let listeners = [];
  let currentState = initialState;

  // return the current state at any given time
  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    listeners.push(listener);

    // find the original 'listener' and unsubscribe them.
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    }
  }

  // actions are just objects with a type field
  // { type: 'SHOW_MODAL' }
  function dispatch(action) {
    currentState = reducer(currentState, action)

    listeners.forEach(listener => {
      listener()
    });
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

const initialState = 1;

// state, action => newState
function myReducer(state, action) {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }

  if (action.type === 'DECREMENT') {
    return state - 1;
  }

  // IMPORTANT always need to return some sort of state
  return state;
}

const store = createStore(myReducer, initialState);

const unsubscribe = store.subscribe(() => {
  console.log('being called from our first subscription');
});

console.log('Initial State: ', store.getState()); // should return 1

console.log('Dispatching an increment action...');
store.dispatch({ type: 'INCREMENT' })
console.log('After Dispatch: ', store.getState()); // should return 2

unsubscribe();

console.log('Dispatching second action...');
store.dispatch({ type: 'SHOW_MODAL' })
console.log('After Dispatch: ', store.getState()); // should return 2

console.log('Dispatching a decrement action...');
store.dispatch({ type: 'DECREMENT' })
console.log('After Dispatch: ', store.getState()); // should return 1
```
