'use strict'

import React from 'react'

export default class AddTodo extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let todoText = this.refs.todoText.value
    let nameText = this.refs.nameText.value

    if (todoText.length && nameText.length > 0) {
      this.refs.todoText.value = ''
      this.refs.nameText.value = ''
      this.props.onAddTodo(todoText, nameText)
    } else {
      this.refs.todoText.focus()
      this.refs.nameText.focus()
    }
  }

  render() {
    return (
      <div className='container__footer'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='todoText' placeholder='What do you want to do?'/>
          <input type='text' ref='nameText' placeholder='Your Name'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    )
  }
}
