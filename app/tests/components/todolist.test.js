'use strict'

import React from 'react'
import expect from 'expect'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import TestUtils from 'react-addons-test-utils'
const $ = require('jquery')

import {configure} from 'configureStore'
import ConnectedTodoList, {TodoList} from 'TodoList'
import ConnectTodo, {Todo} from 'Todo'

describe('TodoList', () => {
  it('Should exist', () => {
    expect(TodoList).toExist();
  })

  it('should render one Todo compnent for each todo item', () => {
    let todos = [{
      id: 1,
      text: 'Eat bread',
      name: 'Israel',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }, {
      id: 2,
      text: 'Play game',
      name: 'Israel',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }]
    let store = configure({
      todos
    })
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    )
    let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0]
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectTodo)

    expect(todosComponents.length).toBe(todos.length)
  })

  it('should render empty message if no todos', () => {
    let todos = []
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    let $el = $(ReactDom.findDOMNode(todoList))

    expect($el.find('.container__message').length).toBe(1)
  })
})
