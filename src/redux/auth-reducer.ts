import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action:any):InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
    return state;
  }
};

type setAuthUserDataActionPayloadType = {
  userId:number | null
  email:string | null 
  login:string | null
  isAuth:boolean | null
}

type setAuthUserData = {
  type: typeof SET_USER_DATA, 
  payload: setAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId:number | null, email:string | null, login:string | null , isAuth:boolean):setAuthUserData => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} });

type getCaptchaUrlSuccessCapchaUrlType = {
  captchaUrl: string
}

type getCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS 
  payload: getCaptchaUrlSuccessCapchaUrlType
}

export const getCaptchaUrlSuccess = (captchaUrl:string):getCaptchaUrlSuccessType => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} });


export const getAuthUserData = () => async (dispatch:any) => {
                  let response = await authAPI.me();
                      
                  if (response.data.resultCode === 0) {
                      let { id, email, login } = response.data.data;
                      dispatch(setAuthUserData(id, email, login, true));
                      };
                  };

export const login = (email:string, password:string, rememberMe:boolean, captcha: null) => async (dispatch:any) => {
 
        let response = await authAPI.login(email, password, rememberMe, captcha)
        
        if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
        
      }
      else {
        if (response.data.resultCode === 10) {
          dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    };
}


export const getCaptchaUrl = () => async (dispatch:any) => {
 
  let response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export const logout = () => async (dispatch:any) => {
          let response = await authAPI.logout()
          
          if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
          };
          }  


export default authReducer;
