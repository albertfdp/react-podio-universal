import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createMiddleware from './clientMiddleware';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);

export default function(client, data) {
  const middleware = createMiddleware(client);
  let __createStore;
  if (__DEV__ && __CLIENT__ && __DEVTOOLS__) {
    const { devTools, persistState } = require('redux-devtools');
    __createStore = compose(
      applyMiddleware(middleware),
      devTools(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
      createStore
    );
  } else {
    __createStore = applyMiddleware(middleware)(createStore);
  }
  return __createStore(reducer, data);
}
