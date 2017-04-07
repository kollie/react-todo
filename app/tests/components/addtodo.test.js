'use strict'

import React from 'react'
import expect from 'expect'
import ReactDom from 'react-dom'
import TestUtils from 'react-addons-test-utils'
const $ = require('jquery')


import AddTodo from 'AddTodo'

describe('AddTodo', () => {
  it('Should exist', () => {
    expect(AddTodo).toExist();
  })

  it('should call onAddTodo prop with valid data', () => {
    let todoText = 'Go for lunch'
    let spy = expect.createSpy()
    let addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    let $el = $(ReactDom.findDOMNode(addtodo))

    addtodo.refs.todoText.value = todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(todoText)
  })

  it('should not call onAddTodo prop when invalid input', () => {
    let todoText = ''
    let spy = expect.createSpy()
    let addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    let $el = $(ReactDom.findDOMNode(addtodo))

    addtodo.refs.todoText.value = todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})
