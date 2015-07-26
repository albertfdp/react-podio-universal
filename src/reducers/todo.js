import _ from 'lodash';
import {
  LOAD_TODO,
  LOAD_TODO_SUCCESS,
  LOAD_TODO_FAIL,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_FAIL,
  MARK_ALL_SUCCESS,
  CLEAR_ALL_SUCCESS
} from '../constants/ActionTypes';

const initialState = {
  loaded: false,
  todos: []
};

export default function todo(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_TODO:
      return {
        ...state,
        loading: true
      };
    case LOAD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        todos: action.result
      };
    case LOAD_TODO_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case ADD_TODO_SUCCESS:
      return {
        todos: [action.result, ...state.todos]
      };
    case ADD_TODO_FAIL:
      return {
        ...state,
        error: action.error
      };
    case DELETE_TODO_SUCCESS:
      return {
        loading: false,
        todos: _.reject(state.todos, { id: action.result})
      };
    case DELETE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case EDIT_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((_todo) => {
          return (_todo.id === action.result.id) ? { ..._todo, ...action.result } : _todo;
        })
      };
    case EDIT_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case MARK_ALL_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((_todo) => {
          return { ..._todo, marked: 'true'};
        })
      };
    case CLEAR_ALL_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((_todo) => {
          return { ..._todo, marked: 'false'};
        })
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.todo && globalState.todo.loaded;
}
