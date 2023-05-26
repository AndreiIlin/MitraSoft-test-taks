import { actionsTypes } from 'app/store';
import { IComment } from 'shared/types.ts';

interface CommentsInitialState {
  status: string;
  comments: IComment[];
  postIdForFetch: number;
  fetchedPosts: number[];
}

const commentsInitialState: CommentsInitialState = {
  status: 'idle',
  comments: [],
  fetchedPosts: [],
  postIdForFetch: 0,
};

type ChangeCommentsStatus = {
  type: actionsTypes.changeCommentsStatus;
  payload: string;
}

type ChangeIdForCommentsFetching = {
  type: actionsTypes.changeIdForCommentsFetching;
  payload: number;
}

type SetComments = {
  type: actionsTypes.setComments;
  payload: IComment[];
}

type CommentsReducerActions = ChangeCommentsStatus | ChangeIdForCommentsFetching | SetComments
export const commentsReducer = (state = commentsInitialState, action: CommentsReducerActions) => {
  switch (action.type) {
    case actionsTypes.changeCommentsStatus:
      return { ...state, status: action.payload };
    case actionsTypes.changeIdForCommentsFetching:
      return { ...state, postIdForFetch: action.payload };
    case actionsTypes.setComments:
      if (action.payload.some(comment => state.fetchedPosts.includes(comment.postId))) {
        return state;
      }
      return {
        ...state,
        comments: [...state.comments, ...action.payload as IComment[]],
        fetchedPosts: [...state.fetchedPosts, action.payload[0].postId],
      };
    default:
      return state;
  }
};
