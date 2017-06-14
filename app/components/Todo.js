'use strict'

import React from 'react'
import {connect} from 'react-redux'
const moment = require('moment')

const actions = require('actions')

export class Todo extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {id, text, name, completed, createdAt, completedAt, dispatch} = this.props
    let todoClassName = completed ? 'todo todo-completed' : 'todo'
    let renderDate = () => {
      let message = 'Created '
      let timeStamp = createdAt

      if (completed) {
        message = 'Completed '
        timeStamp = completedAt
      }

      return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a')
    }
    return (
      <div className={todoClassName} onClick={() => {
          // this.props.onToggle(id)
          dispatch(actions.startToggleTodo(id, !completed))
        }}>
        <div>
          <input type='checkbox' checked={completed}/>
        </div>
        <div>
          <p>Task: {text} - Person responsible: {name}</p>
          <p className='todo-subtext'>{renderDate()}</p>
        </div>

      </div>
    )
  }
}

export default connect()(Todo)
