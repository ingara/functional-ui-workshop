import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from './containers/App';

const history = createBrowserHistory();

export default () => (
  <Router history={ history }>
    <Route path="/" component={ App } />
  </Router>
);
