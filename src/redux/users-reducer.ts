import { Dispatch } from "redux";
import { ResultCodesEnum } from "../api/api";
// @ts-ignore
import { updateObjectInArray } from "../utils/object-helpers";
import { AppStateType, BaseThunkType, InferActionsTypes } from "./redux-store";
import { UserType } from './types/types';
import { usersAPI } from "../api/users-api";


let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, //users ids array
  filter: {
    term: '',
    friend: null as null | boolean
  }
};


const usersReducer = (state = initialState, action: ActionTypes): initialStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
      }

    case "UNFOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })

      }
    case "SET_USERS": {
      return { ...state, users: action.users };
    }

    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }

    case "SET_FILTER": {
      return { ...state, filter: action.payload };
    }

    case "SET_TOTAL_USERS_COUNT": {
      return { ...state, totalUsersCount: action.count };
    }
    case "TOGGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
    case "TOGGLE_IS_FOLLOWING_PROGRESS": {
      return {
        ...state, followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state;
  }
};

type ActionTypes = InferActionsTypes<typeof actions>;

export const actions = {
  followSucces: (userId: number) => ({ type: 'FOLLOW', userId } as const),
  unfollowSucces: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
  setCurrentPage: (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage
  } as const),
  setFilter: (filter: FilterType) => ({
    type: 'SET_FILTER',
    payload: filter
  } as const),
  setTotalUsersCount: (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    count: totalUsersCount
  } as const),
  toggleIsFetching: (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching
  } as const),
  toggleFolowingProgress: (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId
  } as const)

}

/* CREATE THUNK ==========================================================*/

export const requestUsers = (page: number, pageSize: number, filter: FilterType): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    dispatch(actions.setFilter(filter));
    let data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend);

    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  }
}

const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionTypes) => {
  dispatch(actions.toggleFolowingProgress(true, userId));
  let responce = await apiMethod(userId);
  if (responce.resultCode === ResultCodesEnum.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toggleFolowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {

  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSucces);
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSucces);
  };
}
export default usersReducer;


export type initialStateType = typeof initialState;

export type DispatchType = Dispatch<ActionTypes>;
export type ThunkType = BaseThunkType<ActionTypes>;
export type FilterType = typeof initialState.filter;