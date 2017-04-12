'use strict'

import React from 'react'
import uuid from 'node-uuid'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'


export default class TodoApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Eat breakfast'
        },
        {
          id: uuid(),
          text: 'Continue react course'
        },
        {
          id: uuid(),
          text: 'Have lunch'
        },
        {
          id: uuid(),
          text: 'Go for invitation card'
        }
      ]
    }
    this.handleTodo = this.handleTodo.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleTodo (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
  }

  handleSearch (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }

  render () {
    let {todos} = this.state
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleTodo}/>
      </div>
    )
  }
}
