import React from 'react';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Location from 'react-router/lib/Location';
import createStore from './redux/create';
import ApiClient from './services/ApiClient';
import universalRouter from './universalRouter';

if (__CLIENT__) {
  require('todomvc-app-css/index.css');
}

const history = new BrowserHistory();
const client = new ApiClient();

const dest = document.getElementById('content');
const store = createStore(client, window.__data);
const location = new Location(document.location.pathname, document.location.search);

universalRouter(location, history, store)
  .then(({component}) => {
    React.render(component, dest);
  }, (err) => {
    console.error(err);
  });
