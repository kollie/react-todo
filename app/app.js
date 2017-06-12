import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import TodoApp from 'TodoApp'

let actions = require('actions')
let store = require('configureStore').configure()

store.subscribe(() => {
  console.log('New state', store.getState())
})

store.dispatch(actions.addTodo('Eat', 'Israel'))
store.dispatch(actions.setSearchText('Will'))
store.dispatch(actions.toggleShowCompleted())

// Load foundations
$(document).foundation();


// app css
require('applicationStyles');


render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
