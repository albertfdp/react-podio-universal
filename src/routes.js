import React from 'react';
import { Route } from 'react-router';

import Application from './containers/Application/Application';
import TodoApp from './containers/TodoApp/TodoApp';
import NotFound from './containers/NotFound/NotFound';

export default (
  <Route component={Application}>
    <Route path="/" component={TodoApp} />
    <Route path="*" component={NotFound} />
  </Route>
);
