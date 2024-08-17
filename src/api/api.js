import axios from "axios"

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
    }
}


export const deleteUserAPI = {
    deleteUsers(id) {
        return instance
        .delete(`follow/${id}`)
    .then(responce => { 
        return responce.data;
        });
    }
}

export const postUserAPI = {
    postUsers(id) {
        return instance
        .post(`follow/${id}`)
    .then(responce => { 
        return responce.data;
        });
    }
}

export const authAPI = {
    getUsers() {
        return instance
          .get(`auth/me`)
    .then(responce => {
        return responce.data;
    });
    }
}