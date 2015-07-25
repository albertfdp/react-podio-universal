import {
  LOAD_TODO,
  LOAD_TODO_SUCCESS,
  LOAD_TODO_FAIL
} from '../constants/ActionTypes';

const initialState = {
  loaded: false
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
        data: action.result
      };
    case LOAD_TODO_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.todo && globalState.todo.loaded;
}
