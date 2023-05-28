import { actionsTypes } from 'app/store';
import { IUser } from 'shared/types.ts';

interface UsersInitialState {
  user: IUser | null;
  currentUserId: number | null;
}

const usersInitialState: UsersInitialState = {
  user: null,
  currentUserId: null,
};

type SetUserInfo = {
  type: actionsTypes.setUserInfo;
  payload: IUser;
}

type SetCurrentUserId = {
  type: actionsTypes.setCurrentUserId;
  payload: number;
}

type UsersReducerActions = SetUserInfo | SetCurrentUserId;
export const usersReducer = (state = usersInitialState, action: UsersReducerActions) => {
  switch (action.type) {
    case actionsTypes.setUserInfo:
      return { ...state, user: action.payload };
    case  actionsTypes.setCurrentUserId:
      return { ...state, currentUserId: action.payload };
    default:
      return state;
  }
};
