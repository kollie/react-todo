const expect = require('expect')
const df = require('deep-freeze-strict')

const reducers = require('reducers')

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Me'
      }
      let res = reducers.searchTextReducer(df(''), df(action))

      expect(res).toEqual(action.searchText)
    })
  })

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      let res = reducers.showCompletedReducer(df(false), df(action))

      expect(res).toEqual(true)
    })
  })

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        todo: {
          id: 1234,
          text: 'Go for lunch',
          name: 'Israel',
          completed: false,
          createdAt: 7869043
        }
      }
      let res = reducers.todosReducer(df([]), df(action))

      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(action.todo)
    })

    it('should update todo', () => {
      let todos = [{
        id: 123,
        text: 'Eat',
        name: 'Israel',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }]
      let updates = {
        completed: false,
        completedAt: null
      }
      let action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      }
      let res = reducers.todosReducer(df(todos), df(action))

      expect(res[0].completed).toEqual(updates.completed)
      expect(res[0].completedAt).toEqual(updates.completedAt)
      expect(res[0].text).toEqual(todos[0].text)
    })

    it('should add existing todos', () => {
      let todos = [{
        id: 111,
        text: 'me',
        name: 'Israel',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }]

      let action = {
        type: 'ADD_TODOS',
        todos
      }
      let res = reducers.todosReducer(df([]), df(action))

      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(todos[0])
    })
  })
})
