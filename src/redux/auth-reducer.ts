import { securityAPI } from './../api/security-api';
import { ResultCodeForCaptcha, ResultCodesEnum } from "../api/api";
import { FormAction, stopSubmit } from "redux-form";
import { authAPI } from "../api/auth-api";
import { BaseThunkType, InferActionsTypes } from './redux-store';


let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/auth/SET_USER_DATA':
    case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const actions = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({ type: 'SN/auth/SET_USER_DATA', payload: { userId, email, login, isAuth } } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) => ({ type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS', payload: { captchaUrl } } as const)
}


export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let meData = await authAPI.me();

  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, email, login } = meData.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  };
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: null): ThunkType => async (dispatch) => {

  let loginData = await authAPI.login(email, password, rememberMe, captcha)

  if (loginData.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData())

  }
  else {
    if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  };
}


export const getCaptchaUrl = (): ThunkType => async (dispatch) => {

  let securityData = await securityAPI.getCaptchaUrl()
  const captchaUrl = securityData.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}


export const logout = (): ThunkType => async (dispatch: any) => {
  let data = await authAPI.logout()

  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  };
}


export default authReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
