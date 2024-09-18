import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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

    default:
      return state;
  }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

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
  let responce = await profileAPI.updateStatus(status)
      if(responce.data.resultCode === 0) {
      dispatch(setStatus(status)) ;
        }
}

export default profileReducer;
