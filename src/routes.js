import React from 'react';
import { Route } from 'react-router';

import Application from './containers/Application/Application';
import Dashboard from './containers/Dashboard/Dashboard';
import NotFound from './containers/NotFound/NotFound';

export default (
  <Route component={Application}>
    <Route path="/" component={Dashboard} />
    <Route path="*" component={NotFound} />
  </Route>
);
