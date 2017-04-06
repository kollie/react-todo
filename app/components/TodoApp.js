'use strict'

import React from 'react'
import TodoList from 'TodoList'


export default class TodoApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Eat breakfast'
        },
        {
          id: 2,
          text: 'Continue react course'
        },
        {
          id: 3,
          text: 'Have lunch'
        },
        {
          id: 4,
          text: 'Go for invitation card'
        }
      ]
    }
  }

  render () {
    let {todos} = this.state
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
}
