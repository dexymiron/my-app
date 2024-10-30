import axios from "axios";


export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "5a422efd-0a47-41d6-abf4-f2e60bab2646",
  },
});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10
}

export type APIResponceType<D = {}, RC = ResultCodesEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}


