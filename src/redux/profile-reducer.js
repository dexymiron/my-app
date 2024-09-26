import { profileAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
  posts: [
    { id: 1, message: 'Hi how are you?', likesCount: 15 },
    { id: 2, message: 'It\'s my first project', likesCount: 25 },
    { id: 3, message: 'It\'s my first project', likesCount: 35 },
    { id: 4, message: 'It\'s my first project', likesCount: 45 },
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
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
        profile: {...state.profile, photos: action.photos}
      };
    

    default:
      return state;
  }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getProfilePage = (userId) => {
  return async (dispatch) => {
    const responce = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(responce.data));
  }
}

export const getStatus = (userId) => {
  return async (dispatch) => {
    let responce = await profileAPI.getStatus(userId)
    
      dispatch(setStatus(responce.data));
  }
}

export const updateStatus = (status) => async (dispatch) => {
  try {
    let responce = await profileAPI.updateStatus(status)
      if(responce.data.resultCode === 0) {
      dispatch(setStatus(status)) ;
    }
  } catch (error) {
    debugger;
  }
}

export const savePhoto = (file) => async (dispatch) => {
  let responce = await profileAPI.savePhoto(file)
      if(responce.data.resultCode === 0) {
      dispatch(savePhotoSuccess(responce.data.data.photos)) ;
        }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
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
