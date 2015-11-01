import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import configureStore from './configureStore';
import Router from './router';

const store = configureStore();

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
