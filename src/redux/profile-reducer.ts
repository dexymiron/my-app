import { profileAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { ProfileType, PostType, PhotosType } from "./types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';



let initialState = {
  posts: [
    { id: 1, message: 'Hi how are you?', likesCount: 15 },
    { id: 2, message: 'Here my new post', likesCount: 25 },
    { id: 3, message: 'Add something happened with you for last days', likesCount: 35 },
    { id: 4, message: 'Write how you spend time', likesCount: 45 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
  newPostText: ""
} 

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action:any):initialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: action.newPostText,
        likesCount: Math.floor(Math.random()* 50)
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile 
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos} as ProfileType
      };
    

    default:
      return state;
  }
}

type setUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile:ProfileType):setUserProfileType => ({ type: SET_USER_PROFILE, profile });

type setStatus = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status:string):setStatus => ({ type: SET_STATUS, status });

type addPostActionCreatorType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPostActionCreator = (newPostText:string):addPostActionCreatorType => ({ type: ADD_POST, newPostText });

type savePhotoSuccess = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos:PhotosType):savePhotoSuccess => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getProfilePage = (userId:number) => {
  return async (dispatch:any) => {
    const responce = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(responce.data));
  }
}

export const getStatus = (userId:number) => {
  return async (dispatch:any) => {
    let responce = await profileAPI.getStatus(userId)
    
      dispatch(setStatus(responce.data));
  }
}

export const updateStatus = (status:string) => async (dispatch:any) => {
  try {
    let responce = await profileAPI.updateStatus(status)
      if(responce.data.resultCode === 0) {
      dispatch(setStatus(status)) ;
    }
  } catch (error) {
  }
}

export const savePhoto = (file:any) => async (dispatch:any) => {
  let responce = await profileAPI.savePhoto(file)
      if(responce.data.resultCode === 0) {
      dispatch(savePhotoSuccess(responce.data.data.photos)) ;
        }
}

export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState:any) => {
  const userId = getState().auth.userId;
  const responce = await profileAPI.saveProfile(profile);
  if (responce.data.resultCode === 0) {
    dispatch(getProfilePage(userId));
  } else {
    // Передача ошибки через stopSubmit и отклонение промиса
    dispatch(stopSubmit("edit-profile", { _error: responce.data.messages[0] }));
    return Promise.reject(responce.data.messages[0]);
  }
};

export default profileReducer;
