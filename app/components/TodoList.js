'use strict'

import React from 'react'
import Todo from 'Todo'

export default class TodoList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {todos} = this.props
    const renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        )
      })
    }
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
}
