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

export function filterTodos (todos, showCompleted, searchText) {
  let filteredTodos = todos

  filteredTodos = filteredTodos.filter((todo) => {
    return !todo.completed || showCompleted
  });

  filteredTodos = filteredTodos.filter((todo) => {
    let text = todo.text.toLowerCase();
    return searchText.length === 0 || text.indexOf(searchText) > -1;
  });

  filteredTodos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1
    } else if (a.completed && !b.completed) {
      return 1
    } else {
      return 0
    }
  })

  return filteredTodos
}
