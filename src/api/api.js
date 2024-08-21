import axios from "axios";
import { useEffect } from "react";

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
        return instance
          .get(`profile/${userId}`)
    },
    
}

    
export const authAPI = {
    me() {
    return instance
      .get(`auth/me`);
    },
}

