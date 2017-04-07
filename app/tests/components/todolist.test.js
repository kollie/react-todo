'use strict'

import React from 'react'
import expect from 'expect'
import ReactDom from 'react-dom'
import TestUtils from 'react-addons-test-utils'
const $ = require('jquery')


import TodoList from 'TodoList'
import Todo from 'Todo'

describe('TodoList', () => {
  it('Should exist', () => {
    expect(TodoList).toExist();
  })

  it('should render one Todo compnent for each todo item', () => {
    let todos = [{
      id: 1,
      text: 'Eat bread'
    }, {
      id: 2,
      text: 'Play game'
    }]
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

    expect(todosComponents.length).toBe(todos.length)
  })
})
