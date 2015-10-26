import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import configureStore from './configureStore';
import Router from './Router';

import { fetchCounter } from './actions';

const store = configureStore();

store.dispatch(fetchCounter());

render(
  <div>
    <Provider store={ store }>
      <Router />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={ store } monitor={ LogMonitor } />
    </DebugPanel>
  </div>,
  document.getElementById('app')
);
