const expect = require('expect')
const actions = require('actions')

describe('Actions', () => {
  it('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    }
    let res = actions.setSearchText(action.searchText)

    expect(res).toEqual(action)
  })

  it('should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'Eat',
      name: 'Israel'
    }
    let res = actions.addTodo(action.text, action.name)

    expect(res).toEqual(action)
  })

  it('should generate add todos action object', () => {
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

    let res = actions.addTodos(todos)

    expect(res).toEqual(action)
  })

  it('should generate toggle show completed action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    let res = actions.toggleShowCompleted()

    expect(res).toEqual(action)
  })

  it('should toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: 1
    }
    let res = actions.toggleTodo(action.id)

    expect(res).toEqual(action)
  })
})
