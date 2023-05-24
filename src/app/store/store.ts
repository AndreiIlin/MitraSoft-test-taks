import { rootReducer } from 'app/store/reducers.ts';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
);

export const store = createStore(
  rootReducer,
  composedEnhancer,
);
