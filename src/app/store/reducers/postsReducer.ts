import { actionsTypes } from 'app/store';
import { Post } from 'shared/types.ts';

interface PostsInitialState {
  status: string;
  posts: Post[];
  currentPage: number;
}

const postsInitialState: PostsInitialState = {
  status: 'idle',
  posts: [],
  currentPage: 1,
};

type ChangePostsStatus = {
  type: actionsTypes.changePostsStatus;
  payload: string;
}
type ChangeAllPostsPage = {
  type: actionsTypes.changeAllPostsPage;
  payload: number;
}
type SetPosts = {
  type: actionsTypes.setPosts;
  payload: Post[];
}

type FetchAllPosts = {
  type: actionsTypes.fetchAllPosts;
}


type PostReducerActions = ChangePostsStatus | ChangeAllPostsPage | SetPosts | FetchAllPosts;

export const postsReducer = (state = postsInitialState, action: PostReducerActions) => {
  switch (action.type) {
    case actionsTypes.changePostsStatus:
      return { ...state, status: action.payload };
    case actionsTypes.changeAllPostsPage:
      return { ...state, currentPage: action.payload };
    case actionsTypes.setPosts:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
