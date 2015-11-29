import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import DevTools from './containers/DevTools';
import configureStore from './configureStore';
import Router from './router';
import superagent from 'superagent';

const store = configureStore();

render(
  <Provider store={ store }>
    <div>
      <Router />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
