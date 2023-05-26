import { actionsTypes } from 'app/store/actionsTypes.ts';
import { IComment, Post } from 'shared/types.ts';

export const changePostsStatus = (status: string) => ({
  type: actionsTypes.changePostsStatus,
  payload: status,
});

export const changeCommentsStatus = (status: string) => ({
  type: actionsTypes.changeCommentsStatus,
  payload: status,
});

export const changePostsPage = (page: number) => ({
  type: actionsTypes.changeAllPostsPage,
  payload: page,
});

export const fetchAllPosts = () => ({
  type: actionsTypes.fetchAllPosts,
});

export const setAllPosts = (posts: Post[]) => ({
  type: actionsTypes.setAllPosts,
  payload: posts,
});

export const changeIdForCommentsFetching = (id: number) => ({
  type: actionsTypes.changeIdForCommentsFetching,
  payload: id,
});

export const fetchComments = () => ({
  type: actionsTypes.fetchComments,
});

export const setComments = (comments: IComment[]) => ({
  type: actionsTypes.setComments,
  payload: comments,
});

