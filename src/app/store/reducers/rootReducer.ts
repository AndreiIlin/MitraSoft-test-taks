import { commentsReducer } from 'app/store/reducers/commentsReducer.ts';
import { postsReducer } from 'app/store/reducers/postsReducer.ts';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  postsReducer,
  commentsReducer,
});
