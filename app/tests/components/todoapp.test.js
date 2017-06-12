'use strict'

import React from 'react'
import expect from 'expect'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import TestUtils from 'react-addons-test-utils'
const $ = require('jquery')


import TodoApp from 'TodoApp'
import TodoList from 'TodoList'
const configureStore = require('configureStore')


describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  })
  it('should render TodoList', () => {
    let store = configureStore.configure()
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    )

    let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
    let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList)

    expect(todoList.length).toEqual(1)
  })
})
