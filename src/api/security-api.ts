import { instance } from './api';

type getCaptchaUrlResponceType = {
    url: string
}



export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get<getCaptchaUrlResponceType>(`security/get-captcha-url`)
            .then(res => res.data);
    },

};