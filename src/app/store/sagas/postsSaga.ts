import { actionsTypes, changePostsStatus, setPosts } from 'app/store';
import { call, delay, put, select, takeEvery } from 'redux-saga/effects';
import { getAllPosts } from 'shared/api';
import { Post } from 'shared/types.ts';

export function* workerSaga() {
  const activePage: number = yield select(state => state.postsReducer.currentPage);
  yield put(changePostsStatus('loading'));
  const data: Post[] = yield call(() => getAllPosts(activePage));
  yield delay(500);
  yield put(setPosts(data));
  yield put(changePostsStatus('success'));
}

export function* watchSaga() {
  yield takeEvery(actionsTypes.fetchAllPosts, workerSaga);
}
