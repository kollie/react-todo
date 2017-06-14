'use strict'

import React from 'react'
import expect from 'expect'
import ReactDom from 'react-dom'
import TestUtils from 'react-addons-test-utils'
const $ = require('jquery')

import * as actions from 'actions'
import {Todo} from 'Todo'

describe('Todo', () => {
  it('Should exist', () => {
    expect(Todo).toExist();
  })

  it('should dispatch TOGGLE_TODO action on click', () => {
    let todoData = {
      id: 99,
      text: 'Write test',
      completed: true
    }
    let action = actions.startToggleTodo(todoData.id, !todoData.completed)
    let spy = expect.createSpy()
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>)
    let $el = $(ReactDom.findDOMNode(todo))

    TestUtils.Simulate.click($el[0])

    expect(spy).toHaveBeenCalledWith(action)
  })
})
