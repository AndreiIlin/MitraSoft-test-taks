import { actionsTypes } from 'app/store/actionsTypes.ts';
import { IComment, Post } from 'shared/types.ts';

export const changePostsStatus = (status: string) => ({
  type: actionsTypes.changePostsStatus as const,
  payload: status,
});

export const changeCommentsStatus = (status: string) => ({
  type: actionsTypes.changeCommentsStatus as const,
  payload: status,
});

export const changePostsPage = (page: number) => ({
  type: actionsTypes.changeAllPostsPage as const,
  payload: page,
});

export const fetchAllPosts = () => ({
  type: actionsTypes.fetchAllPosts as const,
});

export const setAllPosts = (posts: Post[]) => ({
  type: actionsTypes.setAllPosts as const,
  payload: posts,
});

export const changeIdForCommentsFetching = (id: number) => ({
  type: actionsTypes.changeIdForCommentsFetching as const,
  payload: id,
});

export const fetchComments = () => ({
  type: actionsTypes.fetchComments as const,
});

export const setComments = (comments: IComment[]) => ({
  type: actionsTypes.setComments,
  payload: comments,
});

