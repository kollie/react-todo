'use strict'

import React from 'react'
import expect from 'expect'
import ReactDom from 'react-dom'
import TestUtils from 'react-addons-test-utils'
const $ = require('jquery')


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
    let spy = expect.createSpy()
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>)
    let $el = $(ReactDom.findDOMNode(todo))

    TestUtils.Simulate.click($el[0])

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    })
  })
})
