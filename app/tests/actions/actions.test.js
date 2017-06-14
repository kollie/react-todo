import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const expect = require('expect')

import firebase, {firebaseRef} from 'app/firebase/'
const actions = require('actions')


const createMockStore = configureMockStore([thunk])

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
      todo: {
        id: 56789,
        text: 'Run',
        completed: false,
        createdAt: 0
      }
    }
    let res = actions.addTodo(action.todo)

    expect(res).toEqual(action)
  })

  it('should create todo and dispatch action ADD_TODO', (done) => {
    let store = createMockStore({})
    let todoText = 'Laugh'
    let nameText = 'Israel'

    store.dispatch(actions.startAddTodo(todoText, nameText)).then(() => {
      let actions = store.getActions()
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      })
      expect(actions[0].todo).toInclude({
        text: todoText,
        name: nameText
      })
      done()
    }).catch(done)
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

  it('should generate update todo action', () => {
    let action = {
      type: 'UPDATE_TODO',
      id: 1,
      updates: {completed: false}
    }
    let res = actions.updateTodo(action.id, action.updates)

    expect(res).toEqual(action)
  })

  describe('Test with firebase todos', () => {
    let testTodoRef

    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push()

      testTodoRef.set({
        text: 'Anything',
        name: 'Israel',
        completed: false,
        createdAt: 77367838
      }).then(() => done())
    })

    afterEach((done) => {
      testTodoRef.remove().then(() => done())
    })

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({})
      const action = actions.startToggleTodo(testTodoRef.key, true)

      store.dispatch(action).then(() => {
        const mockActions = store.getActions()

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        })

        expect(mockActions[0].updates).toInclude({
          completed: true
        })

        expect(mockActions[0].updates.completedAt).toExist()
      }, done)
    })
  })
})
