import { actionsTypes } from 'app/store/actionsTypes.ts';

export const changePostsStatus = (status: string) => ({
  type: actionsTypes.changePostsStatus,
  payload: status,
});

export const changeCommentsStatus = (status: string) => ({
  type: actionsTypes.changeCommentsStatus,
  payload: status,
});
