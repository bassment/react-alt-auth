import React from 'react';
import { Route } from 'react-router';
import UserStore from './stores/UserStore';

import App from './components/App';
import Home from './components/Home/Home';
import Count from './components/Count/Count';
import Login from './components/Login/Login';

function requireAuth(nextState, replace) {
  const state = UserStore.getState();

  if (!state.user) {
    replace('/login');
  }
}

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/count" component={Count} onEnter={requireAuth} />
  </Route>
);

export default routes;
