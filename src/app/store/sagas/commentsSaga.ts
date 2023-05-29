import { actionsTypes, changeCommentsStatus, setComments } from 'app/store';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getPostComments } from 'shared/api';
import { IComment } from 'shared/types.ts';

export function* workerSaga() {
  const fetchingId: number = yield select(state => state.commentsReducer.postIdForFetch);
  try {
    yield put(changeCommentsStatus('loading'));
    const data: IComment[] = yield call(() => getPostComments(fetchingId));
    yield put(setComments(data));
    yield put(changeCommentsStatus('success'));
  } catch {
    yield put(changeCommentsStatus('error'));
  }
}

export function* watchSaga() {
  yield takeEvery(actionsTypes.fetchComments, workerSaga);
}
