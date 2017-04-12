'use strict'

import React from 'react'
import expect from 'expect'
import ReactDom from 'react-dom'
import TestUtils from 'react-addons-test-utils'
const $ = require('jquery')


import TodoApp from 'TodoApp'

describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  })

  it('should add todo to the todos state on handleTodo', () => {
    let todoText = 'test text'
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>)

    todoApp.setState({todos: []})
    todoApp.handleTodo(todoText)


    expect(todoApp.state.todos[0].text).toBe(todoText)
  })
})
