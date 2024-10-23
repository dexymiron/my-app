import { UserType } from '../redux/types/types';
import { instance, APIResponceType } from './api';
import { profileAPI } from './profile-api';

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data;
            });
    },
    follow(userId: number) {
        return instance
            .post<APIResponceType>(`follow/${userId}`)
            .then(responce => {
                return responce.data;
            });
    },
    unfollow(userId: number) {
        return instance
            .delete(`follow/${userId}`)
            .then(responce => {
                return responce.data;
            }) as Promise<APIResponceType>;
    },

    /* getProfile(userId: number) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }, */

};

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
