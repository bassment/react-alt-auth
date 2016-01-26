import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Home from './components/Home/Home';
import Count from './components/Count/Count';

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/count" component={Count} />
  </Route>
);

export default routes;
