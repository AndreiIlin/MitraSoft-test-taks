import { all } from 'redux-saga/effects';
import * as commentsSaga from './commentsSaga.ts';
import * as postsSaga from './postsSaga.ts';
import * as userSaga from './userSaga.ts';

export function* rootSaga() {
  yield all([
    postsSaga.watchSaga(),
    commentsSaga.watchSaga(),
    userSaga.watchSaga(),
  ]);
}
