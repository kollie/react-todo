'use strict'

import expect from 'expect'
import ReactDom from 'react-dom'
import TestUtils from 'react-addons-test-utils'
const $ = require('jquery')


import TodoApp from 'TodoApp'

describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  })
})
