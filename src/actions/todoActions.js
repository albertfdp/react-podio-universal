import {
  LOAD_TODO,
  LOAD_TODO_SUCCESS,
  LOAD_TODO_FAIL,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  EDIT_TODO,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_FAIL,
  MARK_ALL,
  MARK_ALL_SUCCESS,
  MARK_ALL_FAIL,
  CLEAR_ALL,
  CLEAR_ALL_SUCCESS,
  CLEAR_ALL_FAIL
} from '../constants/ActionTypes';

export function load() {
  return {
    types: [LOAD_TODO, LOAD_TODO_SUCCESS, LOAD_TODO_FAIL],
    promise: (client) => client.get('/todo')
  };
}

export function addTodo(text) {
  return {
    types: [ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAIL],
    promise: (client) => client.post('/addTodo', {
      data: {
        text
      }
    })
  };
}

export function deleteTodo(id) {
  return {
    types: [DELETE_TODO, DELETE_TODO_SUCCESS, DELETE_TODO_FAIL],
    promise: (client) => client.del('/deleteTodo', {
      data: {
        id
      }
    })
  };
}

export function editTodo(id, text) {
  return {
    types: [EDIT_TODO, EDIT_TODO_SUCCESS, EDIT_TODO_FAIL],
    promise: (client) => client.put('/editTodo', {
      data: {
        id,
        text
      }
    })
  };
}

export function markTodo(id, marked) {
  return {
    types: [EDIT_TODO, EDIT_TODO_SUCCESS, EDIT_TODO_FAIL],
    promise: (client) => client.put('/editTodo', {
      data: {
        id,
        marked: (marked === 'true' ? 'false' : 'true')
      }
    })
  };
}

export function markAll() {
  return {
    types: [MARK_ALL, MARK_ALL_SUCCESS, MARK_ALL_FAIL],
    promise: (client) => client.post('/markAll')
  };
}

export function clearMarked() {
  return {
    types: [CLEAR_ALL, CLEAR_ALL_SUCCESS, CLEAR_ALL_FAIL],
    promise: (client) => client.post('/clearMarked')
  };
}
