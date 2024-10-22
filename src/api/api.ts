import axios, { AxiosResponse } from "axios";
import { PhotosType, ProfileType, UserType } from "../redux/types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5a422efd-0a47-41d6-abf4-f2e60bab2646",
      },
});

type MyUsersType = {
  items: UserType[]
  totalCount: number
  error: string | null
}

type MyFollowUserType = {
  data: {
    userId: number
  }
  resultCode: ResultCodesEnum | ResultCodeForCaptcha
  messages: Array<string>
}

export const usersAPI = {
    getUsers(currentPage:number, pageSize:number) {
        return instance
          .get<MyUsersType>(`users?page=${currentPage}&count=${pageSize}`)
    .then(responce => { 
        return responce.data;
    });
    },
    follow(userId:number) {
        return instance
        .post<MyFollowUserType>(`follow/${userId}`)
    .then(responce => { 
        return responce.data;
        });
    },
    unfollow(userId:number) {
        return instance
        .delete<MyFollowUserType>(`follow/${userId}`)
    .then(responce => { 
        return responce.data;
        });
    },
    
    getProfile(userId:number) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    },
    
};

type MyGetProfileType = {
  userId: number
} & ProfileType;

type MyPhotosType = {
  data: {
    photos: PhotosType
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}

export const profileAPI = {
    getProfile(userId:number) {
        return instance
          .get<MyGetProfileType>(`profile/${userId}`)
          .then(res => res.data)
    },
    getStatus(userId:number) {
        return instance
          .get<string>(`profile/status/${userId}`)
          .then(res => res.data)
    },
    updateStatus(status:string) {
        return instance
          .put<MyResponceType>(`profile/status`, {status: status});
    },
    savePhoto(photoFile: any) {
        var formData = new FormData();
        formData.append("image", photoFile);
        return instance
          .put<MyPhotosType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
          .then(res => res.data);
    },
    saveProfile(profile:ProfileType) {
      return instance.put<MyResponceType>(`profile`, profile )
      .then(res => res.data);
    }
    
};

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10
}

type MyResponceType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}

type LoginRespoceType = {
  data: {
    userId: number
  }
  resultCode: ResultCodesEnum | ResultCodeForCaptcha
  messages: Array<string>
}

export const authAPI = {
    me() {
    return instance
      .get<MyResponceType>(`auth/me`).then(res => res.data);
    },
    login(email:string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance
          .post<LoginRespoceType>(`auth/login`, {email, password, rememberMe, captcha})
          .then(res => res.data);
        },
    logout() {
            return instance
              .delete<LoginRespoceType>(`auth/login`);
            },
};

type getCaptchaUrlType = {
  url: string
}

export const securityAPI = {
  getCaptchaUrl() {
  return instance
    .get<getCaptchaUrlType>(`security/get-captcha-url`)
    .then(res => res.data);
  },
  
};