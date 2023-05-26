import { rootReducer } from 'app/store/reducers';
import { rootSaga } from 'app/store/sagas';
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

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
