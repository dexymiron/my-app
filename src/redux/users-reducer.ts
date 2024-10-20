import { Dispatch } from "redux";
import { ResultCodesEnum, usersAPI } from "../api/api";
// @ts-ignore
import { updateObjectInArray } from "../utils/object-helpers";
import { AppStateType } from "./redux-store";
import { UserType } from './types/types';
import { ThunkAction } from "redux-thunk";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number> //users ids array
};

type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action:ActionTypes):initialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true} )
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false} )
        
      }
    case SET_USERS: {
      return { ...state, users: action.users };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return { ...state, followingInProgress: action.isFetching 
        ? [...state.followingInProgress, action.userId ] 
        : state.followingInProgress.filter(id => id !== action.userId) 
      }
    }
    default:
      return state;
  }
};

type ActionTypes =  FollowSuccesType | UnfollowSuccesType | SetUsersActionType | SetCurrentPageType | SetTotalUsersCountType | ToggleIsFetchingType | ToggleFollowingProgressType;

type FollowSuccesType = {
  type: typeof FOLLOW
  userId: number
}
export const followSucces = (userId:number):FollowSuccesType => ({ type: FOLLOW, userId });
type UnfollowSuccesType = {
  type: typeof UNFOLLOW 
  userId: number 
}
export const unfollowSucces = (userId:number):UnfollowSuccesType => ({ type: UNFOLLOW, userId });
type SetUsersActionType = {
  type: typeof SET_USERS 
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>):SetUsersActionType => ({ type: SET_USERS, users });
type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE 
  currentPage: number
}
export const setCurrentPage = (currentPage:number):SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
type SetTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT 
  count: number
}
export const setTotalUsersCount = (totalUsersCount:number):SetTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount
});
type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING 
  isFetching: boolean
}
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});
type ToggleFollowingProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS 
  isFetching: boolean
  userId:number
}
export const toggleFolowingProgress = (isFetching:boolean, userId:number):ToggleFollowingProgressType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

/* CREATE THUNK ==========================================================*/ 

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const requestUsers = (page:number, pageSize:number): ThunkType => {
return async (dispatch, getState) => {
  dispatch (toggleIsFetching(true));
  dispatch (setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
      
        dispatch (toggleIsFetching(false));
        dispatch (setUsers(data.items));
        dispatch (setTotalUsersCount(data.totalCount));
}
}

const followUnfollowFlow = async (dispatch:DispatchType, userId:number, apiMethod:any, actionCreator:(userId: number) => FollowSuccesType | UnfollowSuccesType) => {
  dispatch(toggleFolowingProgress(true, userId));
                    let responce = await apiMethod(userId);
                      if (responce.resultCode === ResultCodesEnum.Success) {
                        dispatch(actionCreator(userId));
                      }
                      dispatch(toggleFolowingProgress(false, userId));
}

export const follow = (userId:number) => {
  
    return async (dispatch:DispatchType) => {
      followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSucces);
    }
  }

  export const unfollow = (userId:number): ThunkType => {
    return async (dispatch: DispatchType) => {
      followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSucces);
    }; 
  }
export default usersReducer;
