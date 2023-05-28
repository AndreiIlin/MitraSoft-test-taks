import { actionsTypes } from 'app/store/actionsTypes.ts';
import { IComment, IUser, Post } from 'shared/types.ts';

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

export const setPosts = (posts: Post[]) => ({
  type: actionsTypes.setPosts as const,
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
  type: actionsTypes.setComments as const,
  payload: comments,
});

export const setCurrentUserId = (userId: number) => ({
  type: actionsTypes.setCurrentUserId as const,
  payload: userId,
});

export const setUserInfo = (user: IUser) => ({
  type: actionsTypes.setUserInfo as const,
  payload: user,
});

