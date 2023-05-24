import { actionsTypes } from 'app/store/actionsTypes.ts';
import { AnyAction, combineReducers } from 'redux';
import { Comment, Post } from 'shared/types.ts';

interface PostInitialState {
  status: string;
  posts: Post[];
}

const postInitialState: PostInitialState = {
  status: 'idle',
  posts: [],
};

const postsReducer = (state = postInitialState, action: AnyAction) => {
  switch (action.type) {
    case actionsTypes.changePostsStatus:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

interface CommentsInitialState {
  status: string;
  comments: Comment[];
}

const commentsInitialState: CommentsInitialState = {
  status: 'idle',
  comments: [],
};

const commentsReducer = (state = commentsInitialState, action: AnyAction) => {
  switch (action.type) {
    case actionsTypes.changeCommentsStatus:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  postsReducer,
  commentsReducer,
});
