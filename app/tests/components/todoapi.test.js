'use strict'

import expect from 'expect'
import {getTodos, setTodos} from 'TodoAPI'





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
})
