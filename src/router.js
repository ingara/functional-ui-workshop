import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from './containers/App';
import Admin from './containers/Admin';
import Calendar from './containers/Calendar';

const history = createBrowserHistory();

export default () => (
  <Router history={ history }>
    <Route path="/" component={ App }>
      <Route path="/form" component={ Admin } />
      <IndexRoute component={ Calendar } />
    </Route>
  </Router>
);
