import React from 'react';
import ReactDOM from 'react-dom';
import Router, {browserHistory} from 'react-router';
import routes from './routes';

// Expose globally
window.React = React;

ReactDOM.render(
  <Router
    children={routes}
    history={browserHistory} />,
  document.getElementById('app'));
