import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5a422efd-0a47-41d6-abf4-f2e60bab2646",
      },
});

export const usersAPI = {
    getUsers(currentPage:number, pageSize:number) {
        return instance
          .get(`users?page=${currentPage}&count=${pageSize}`)
    .then(responce => { 
        return responce.data;
    });
    },
    follow(userId:number) {
        return instance
        .post(`follow/${userId}`)
    .then(responce => { 
        return responce.data;
        });
    },
    unfollow(userId:number) {
        return instance
        .delete(`follow/${userId}`)
    .then(responce => { 
        return responce.data;
        });
    },
    
    getProfile(userId:number) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    },
    
};

export const profileAPI = {
    getProfile(userId:number) {
        return instance
          .get(`profile/${userId}`)
    },
    getStatus(userId:number) {
        return instance
          .get(`profile/status/${userId}`)
    },
    updateStatus(status:string | null) {
        return instance
          .put(`profile/status`, {status: status});
    },
    savePhoto(photoFile: any) {
        var formData = new FormData();
        formData.append("image", photoFile);
        return instance
          .put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          });
    },
    saveProfile(profile:any) {
      return instance.put(`profile`, profile );
    }
    
};
    
export const authAPI = {
    me() {
    return instance
      .get(`auth/me`);
    },
    login(email:string, password:string, rememberMe = false, captcha = null) {
        return instance
          .post(`auth/login`, {email, password, rememberMe, captcha});
        },
    logout() {
            return instance
              .delete(`auth/login`);
            },
};

export const securityAPI = {
  getCaptchaUrl() {
  return instance
    .get(`security/get-captcha-url`);
  },
  
};
