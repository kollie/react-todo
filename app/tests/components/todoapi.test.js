'use strict'

import expect from 'expect'
import {getTodos, setTodos, filterTodos} from 'TodoAPI'





describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos')
  })
  it('Should exist', () => {
    expect(getTodos).toExist();
  })

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      let todos = [{
        id: 33,
        text: 'testing'
      }]
      setTodos(todos)
      let actualTodos = JSON.parse(localStorage.getItem('todos'))

      expect(actualTodos).toEqual(todos)
    })

    it('should not set invalid todos array', () => {
      let badTodos = {a: 'b'}
      setTodos(badTodos)

      expect(localStorage.getItem('todos')).toBe(null)
      })
  })

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      let actualTodos = getTodos()

      expect(actualTodos).toEqual([])
    })

    it('should return if valid array in localStorage', () => {
      let todos = [{
        id: 33,
        text: 'testing',
        completed: false
      }]
      localStorage.setItem('todos', JSON.stringify(todos))

      let actualTodos = getTodos()

      expect(actualTodos).toEqual(todos)
    })
  })

  describe('filterTodos', () => {
    let todos = [{
      id: 22,
      text: 'testing here',
      completed: true
    },{
      id: 23,
      text: 'testing',
      completed: false
    },{
      id: 24,
      text: 'testing here',
      completed: true
    }]

    it('should return all item if showCompleted is true', () => {
      let filteredTodos = filterTodos(todos, true, '')
      expect(filteredTodos.length).toBe(3)
    })

    it('should only return incomplete item if showCompleted is false', () => {
      let filteredTodos = filterTodos(todos, false, '')
      expect(filteredTodos.length).toBe(1)
    })

    it('should sort by completed status', () => {
      let filteredTodos = filterTodos(todos, true, '')
      expect(filteredTodos[0].completed).toBe(false)
    })

    it('should filter todos by searchText', () => {
      let filteredTodos = filterTodos(todos, true, 'here')
      expect(filteredTodos.length).toBe(2)
    })

    it('should return all todos if searchText is empty', () => {
      let filteredTodos = filterTodos(todos, true, '')
      expect(filteredTodos.length).toBe(3)
    })
  })
})
