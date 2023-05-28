import { actionsTypes, changePostsStatus, setPosts, setUserInfo } from 'app/store';
import { call, delay, put, select, takeEvery } from 'redux-saga/effects';
import { getUserInfo, getUserPosts } from 'shared/api';
import { IUser, Post } from 'shared/types.ts';

export function* workerSaga() {
  const currentUserId: number = yield select(state => state.usersReducer.currentUserId);
  const userInfo: IUser = yield call(() => getUserInfo(currentUserId));
  yield put(setUserInfo(userInfo));
  yield put(changePostsStatus('loading'));
  const posts: Post[] = yield call(() => getUserPosts(currentUserId));
  yield delay(500);
  yield put(setPosts(posts));
  yield put(changePostsStatus('success'));
}

export function* watchSaga() {
  yield takeEvery(actionsTypes.setCurrentUserId, workerSaga);
}
