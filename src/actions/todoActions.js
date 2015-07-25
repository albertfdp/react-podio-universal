import {
  LOAD_TODO,
  LOAD_TODO_SUCCESS,
  LOAD_TODO_FAIL,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL
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
    promise: (client) => client.post('/todo', {
      data: {
        text
      }
    })
  };
}
