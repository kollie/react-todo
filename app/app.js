import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import {hashHistory} from 'react-router'

import firebase from 'app/firebase/'
import router from 'app/router/'

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

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos')
  } else {
    hashHistory.push('/')
  }
})

store.dispatch(actions.startAddTodos())

// Load foundations
$(document).foundation();


// app css
require('applicationStyles');

render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
