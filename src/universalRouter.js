import React from 'react';
import Router from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';

const getFetchData = (component) => {
  return component.fetchData || (component.DecoratedComponent && component.DecoratedComponent.fetchData);
};

export function createTransitionHook(store) {
  return (nextState, transition, callback) => {
    Promise.all(nextState.branch
      .map(route => route.component)
      .filter(component => {
        return getFetchData(component);
      })
      .map(getFetchData)
      .map(fetchData => {
        return fetchData(store, nextState.params);
      }))
      .then(() => {
        callback();
      }, (err) => {
        callback(err);
      });
  };
}

export default function universalRouter(location, history, store) {
  return new Promise((resolve, reject) => {
    Router.run(routes, location, [createTransitionHook(store)], (err, initialState, transition) => {
      if (err) {
        return reject(err);
      }

      if (transition && transition.redirectInfo) {
        return resolve({
          transition,
          isRedirect: true
        });
      }

      if (history) { // only __CLIENT__
        initialState.history = history;
      }

      const component = (
        <Provider store={store} key="provider">
          {() => <Router {...initialState} children={routes} />}
        </Provider>
      );

      return resolve({
        component,
        isRedirect: false
      });
    });
  });
}
