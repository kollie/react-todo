'use strict'

import React from 'react'
import expect from 'expect'
import ReactDom from 'react-dom'
import TestUtils from 'react-addons-test-utils'
const $ = require('jquery')


import {AddTodo} from 'AddTodo'

describe('AddTodo', () => {
  it('Should exist', () => {
    expect(AddTodo).toExist();
  })

  it('should dispatch ADD_TODO when valid todo', () => {
    let todoText = 'Go for lunch'
    let nameText = 'Israel'
    let action = {
      type: 'ADD_TODO',
      text: todoText,
      name: nameText
    }
    let spy = expect.createSpy()
    let addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    let $el = $(ReactDom.findDOMNode(addtodo))

    addtodo.refs.todoText.value = todoText
    addtodo.refs.nameText.value = nameText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(action)
  })

  it('should not dispatch ADD_TODO when invalid todo text', () => {
    let todoText = ''
    let spy = expect.createSpy()
    let addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    let $el = $(ReactDom.findDOMNode(addtodo))

    addtodo.refs.todoText.value = todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})
