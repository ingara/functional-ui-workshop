import { createStore, applyMiddleware, compose } from 'redux';
import { devTools } from 'redux-devtools';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [
  thunk,
  createLogger()
];

const finalCreateStore = compose(
  applyMiddleware.apply(null, middlewares),
  devTools()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
