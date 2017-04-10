'use strict'

import React from 'react'
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
    this.handleTodo = this.handleTodo.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleTodo (text) {
    alert('new todo: ' + text)
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
