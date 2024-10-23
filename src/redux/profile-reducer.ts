import { ResultCodesEnum } from "../api/api";
import { FormAction, stopSubmit } from "redux-form";
import { ProfileType, PostType, PhotosType } from "./types/types";
import { profileAPI } from "../api/profile-api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

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

const profileReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case 'SN/PROFILE/ADD-POST':
      let newPost = {
        id: state.posts.length + 1,
        message: action.newPostText,
        likesCount: Math.floor(Math.random() * 50)
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };

    case 'SN/PROFILE/SET_USER_PROFILE':
      return {
        ...state,
        profile: action.profile
      };

    case 'SN/PROFILE/SET_STATUS':
      return {
        ...state,
        status: action.status
      };

    case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType
      };


    default:
      return state;
  }
}

export const actions = {
  setUserProfile: (profile: ProfileType) => ({ type: 'SN/PROFILE/SET_USER_PROFILE', profile } as const),
  setStatus: (status: string) => ({ type: 'SN/PROFILE/SET_STATUS', status } as const),
  addPostActionCreator: (newPostText: string) => ({ type: 'SN/PROFILE/ADD-POST', newPostText } as const),
  savePhotoSuccess: (photos: PhotosType) => ({ type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos } as const)
}


export const getProfilePage = (userId: number): ThunkType => {
  return async (dispatch: any) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data));
  }
}

export const getStatus = (userId: number): ThunkType => {
  return async (dispatch: any) => {
    let meData = await profileAPI.getStatus(userId)

    dispatch(actions.setStatus(meData));
  }
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.setStatus(status));
    }
  } catch (error) {
  }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  let myData = await profileAPI.savePhoto(file)
  if (myData.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.savePhotoSuccess(myData.data.photos));
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const myData = await profileAPI.saveProfile(profile);
  if (myData.resultCode === ResultCodesEnum.Success) {
    if (userId !== null) {
      dispatch(getProfilePage(userId));
    } else {
      throw new Error("userId can`t be null")
    }
  } else {
    // Передача ошибки через stopSubmit и отклонение промиса
    dispatch(stopSubmit("edit-profile", { _error: myData.messages[0] }));
    return Promise.reject(myData.messages[0]);
  }
};

export default profileReducer;

export type initialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
