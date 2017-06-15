import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import TodoApp from 'TodoApp'

const actions = require('actions')
const store = require('configureStore').configure()

// store.subscribe(() => {
//   let state = store.getState()
//   console.log('New state', state)
//
//   setTodos(state.todos)
// })
//
// let initialTodos = getTodos()
// store.dispatch(actions.addTodos(initialTodos))

store.dispatch(actions.startAddTodos())

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
