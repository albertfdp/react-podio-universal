import { createStore, combineReducers, applyMiddleware } from 'redux';
import createMiddleware from './clientMiddleware';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);

export default function(client, data) {
  const middleware = createMiddleware(client);
  let __createStore = applyMiddleware(middleware)(createStore);
  return __createStore(reducer, data);
}
