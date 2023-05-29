import { actionsTypes, changePostsStatus, setPosts } from 'app/store';
import { call, delay, put, select, takeEvery } from 'redux-saga/effects';
import { getAllPosts } from 'shared/api';
import { Post, SortOrder } from 'shared/types.ts';

export function* workerSaga() {
  const activePage: number = yield select(state => state.postsReducer.currentPage);
  const sortOrder: SortOrder = yield select(state => state.postsReducer.sortOrder);
  const searchQuery: string = yield select(state => state.postsReducer.searchQuery);
  try {
    yield put(changePostsStatus('loading'));
    const data: Post[] = yield call(() => getAllPosts(activePage, sortOrder, searchQuery));
    yield delay(500);
    yield put(setPosts(data));
    yield put(changePostsStatus('success'));
  } catch {
    yield put(changePostsStatus('error'));
  }
}

export function* watchSaga() {
  yield takeEvery(actionsTypes.fetchAllPosts, workerSaga);
}
