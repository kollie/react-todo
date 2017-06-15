'use strict'

import React from 'react'
import {connect} from 'react-redux'
import Todo from 'Todo'
import {filterTodos} from 'TodoAPI'

export class TodoList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {todos, showCompleted, searchText} = this.props
    let filteredTodos = filterTodos(todos, showCompleted, searchText)
    const renderTodos = () => {
      if (filteredTodos.length === 0) {
        return (
          <p className='container__message'>Nothing To Do</p>
        )
      }
      return filteredTodos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
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

export default connect(
  (state) => {
    return state
  }
)(TodoList)
