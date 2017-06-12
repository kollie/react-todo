export let setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

export let toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export let addTodo = (text, name) => {
  return {
    type: 'ADD_TODO',
    text,
    name
  }
}

export let toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
