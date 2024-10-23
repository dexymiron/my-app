import { PhotosType } from './../redux/types/types';
import { ProfileType } from '../redux/types/types';
import { instance, APIResponceType } from './api';


/* type MyGetProfileType = {
    userId: number
} & ProfileType;

type MyPhotosType = {
    data: {
        photos: PhotosType
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
} */


type SavePhotoResponseDataType = {
    photos: PhotosType
}


export const profileAPI = {
    getProfile(userId: number) {
        return instance
            .get<ProfileType>(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number) {
        return instance
            .get<string>(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance
            .put<APIResponceType>(`profile/status`, { status: status })
            .then(res => res.data);;
    },
    savePhoto(photoFile: File) {
        var formData = new FormData();
        formData.append("image", photoFile);
        return instance
            .put<APIResponceType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => res.data);
    },
    saveProfile(profile: ProfileType) {
        return instance.put<APIResponceType>(`profile`, profile)
            .then(res => res.data);
    }

};