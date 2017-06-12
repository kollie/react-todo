'use strict'

import React from 'react'
import uuid from 'node-uuid'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
const moment = require('moment')
import {setTodos, getTodos, filterTodos} from 'TodoAPI'


export default class TodoApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: getTodos()
    }
    this.handleTodo = this.handleTodo.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidUpdate () {
    setTodos(this.state.todos)
  }

  handleTodo (text, name) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          name: name,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
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
    let {todos, showCompleted, searchText} = this.state
    let filteredTodos = filterTodos(todos, showCompleted, searchText)
    console.log(filteredTodos)
    return (
      <div>
        <h1 className='page-title'>Todo App</h1>

        <div className='row '>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList/>
              <AddTodo onAddTodo={this.handleTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
