'use strict'

import $ from 'jquery'

export function setTodos (todos) {
  if ($.isArray(todos)) {
    localStorage.setItem('todos', JSON.stringify(todos))
    return todos
  }
}

export function getTodos () {
  let stringTodos = localStorage.getItem('todos')
  let todos = []

  try {
    todos = JSON.parse(stringTodos)
  } catch (e) {

  }

  return $.isArray(todos) ? todos : []
}
