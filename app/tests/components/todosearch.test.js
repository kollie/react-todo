'use strict'

import React from 'react'
import expect from 'expect'
import ReactDom from 'react-dom'
import TestUtils from 'react-addons-test-utils'
const $ = require('jquery')


import TodoSearch from 'TodoSearch'

describe('TodoSearch', () => {
  it('Should exist', () => {
    expect(TodoSearch).toExist();
  })

  it('should call onSearch with entered input text', () => {
    let searchText = 'Sleep'
    let spy = expect.createSpy()
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)

    todoSearch.refs.searchText.value = searchText
    TestUtils.Simulate.change(todoSearch.refs.searchText)

    expect(spy).toHaveBeenCalledWith(false, 'Sleep')
  })

  it('should call onSearch with proper checked value', () => {
    let spy = expect.createSpy()
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)

    todoSearch.refs.showCompleted.checked = true
    TestUtils.Simulate.change(todoSearch.refs.showCompleted)

    expect(spy).toHaveBeenCalledWith(true, '')
  })
})
