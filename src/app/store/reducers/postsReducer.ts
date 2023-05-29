import { actionsTypes } from 'app/store';
import { Post, SortOrder } from 'shared/types.ts';

interface PostsInitialState {
  status: string;
  posts: Post[];
  currentPage: number;
  searchQuery: string;
  sortOrder: SortOrder;
}

const postsInitialState: PostsInitialState = {
  status: 'idle',
  posts: [],
  currentPage: 1,
  searchQuery: '',
  sortOrder: 'asc',
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

type ChangeSortOrder = {
  type: actionsTypes.changeSortOrder;
  payload: SortOrder;
}

type ChangeSearchQuery = {
  type: actionsTypes.changeSearchQuery;
  payload: string;
}

type ClearSearchQuery = {
  type: actionsTypes.clearSearchQuery;
}


type PostReducerActions =
  ChangePostsStatus
  | ChangeAllPostsPage
  | SetPosts
  | FetchAllPosts
  | ChangeSortOrder
  | ClearSearchQuery
  | ChangeSearchQuery;

export const postsReducer = (state = postsInitialState, action: PostReducerActions) => {
  switch (action.type) {
    case actionsTypes.changePostsStatus:
      return { ...state, status: action.payload };
    case actionsTypes.changeAllPostsPage:
      return { ...state, currentPage: action.payload };
    case actionsTypes.setPosts:
      return { ...state, posts: action.payload };
    case actionsTypes.changeSortOrder:
      return { ...state, sortOrder: action.payload };
    case actionsTypes.changeSearchQuery:
      return { ...state, searchQuery: action.payload };
    case actionsTypes.clearSearchQuery:
      return { ...state, searchQuery: '', sortOrder: 'asc' as SortOrder };
    default:
      return state;
  }
};
