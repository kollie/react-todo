'use strict'

import React from 'react'
import expect from 'expect'
import ReactDom from 'react-dom'
import TestUtils from 'react-addons-test-utils'
const $ = require('jquery')


import Todo from 'Todo'

describe('Todo', () => {
  it('Should exist', () => {
    expect(Todo).toExist();
  })

  it('should called onToggle prop with id on click', () => {
    let todoData = {
      id: 99,
      text: 'Write test',
      completed: true
    }
    let spy = expect.createSpy()
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>)
    let $el = $(ReactDom.findDOMNode(todo))

    TestUtils.Simulate.click($el[0])

    expect(spy).toHaveBeenCalledWith(99)
  })
})
