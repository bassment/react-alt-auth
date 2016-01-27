import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Home from './components/Home/Home';
import Count from './components/Count/Count';
import UserStore from './stores/UserStore';

function requireAuth(nextState, replace) {
  const state = UserStore.getState();

  if (!state.user) {
    replace('/');
  }
}

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/count" component={Count} onEnter={requireAuth} />
  </Route>
);

export default routes;
