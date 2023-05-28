import { commentsReducer } from 'app/store/reducers/commentsReducer.ts';
import { postsReducer } from 'app/store/reducers/postsReducer.ts';
import { usersReducer } from 'app/store/reducers/usersReducer.ts';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  postsReducer,
  commentsReducer,
  usersReducer
});
