import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import DevTools from './containers/DevTools';
import configureStore from './configureStore';
import Router from './router';
import { ApiActions } from './actions';

const store = configureStore();

store.dispatch(ApiActions.fetchWindows());

console.log('SOLYUTIONASA:OPDJA');

render(
  <Provider store={ store }>
    <div>
      <Router />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
