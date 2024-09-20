import axios from "axios";
import { savePhoto } from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5a422efd-0a47-41d6-abf4-f2e60bab2646",
      },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
          .get(`users?page=${currentPage}&count=${pageSize}`)
    .then(responce => { 
        return responce.data;
    });
    },
    follow(userId) {
        return instance
        .post(`follow/${userId}`)
    .then(responce => { 
        return responce.data;
        });
    },
    unfollow(userId) {
        return instance
        .delete(`follow/${userId}`)
    .then(responce => { 
        return responce.data;
        });
    },
    
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    },
    
};

export const profileAPI = {
    getProfile(userId) {
        return instance
          .get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance
          .get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance
          .put(`profile/status`, {status: status});
    },
    savePhoto(photoFile) {
        var formData = new FormData();
        formData.append("image", photoFile);
        return instance
          .put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          });
    }
    
};
    
export const authAPI = {
    me() {
    return instance
      .get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance
          .post(`auth/login`, {email, password, rememberMe});
        },
    logout() {
            return instance
              .delete(`auth/login`);
            },
};

