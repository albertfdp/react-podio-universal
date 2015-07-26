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
  EDIT_TODO_FAIL
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

export function markTodo(id, mark) {
  return {
    types: [EDIT_TODO, EDIT_TODO_SUCCESS, EDIT_TODO_FAIL],
    promise: (client) => client.put('/editTodo', {
      data: {
        id,
        mark
      }
    })
  };
}

export function markAll() {
  return {
    types: [MARK_TODO, EDIT_TODO_SUCCESS, EDIT_TODO_FAIL],
    promise: (client) => client.post('/markAll')
  };
}

export function clearMarked() {
  return {
    types: [EDIT_TODO, EDIT_TODO_SUCCESS, EDIT_TODO_FAIL],
    promise: (client) => client.post('/clearMarked')
  };
}
