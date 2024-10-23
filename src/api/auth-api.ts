import { instance, APIResponceType, ResultCodeForCaptcha, ResultCodesEnum } from './api';



type LoginRespoceType = {
    userId: number
}

type MyResponceType = {
    id: number
    email: string
    login: string
}



export const authAPI = {
    me() {
        return instance
            .get<APIResponceType<MyResponceType>>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance
            .post<APIResponceType<LoginRespoceType, ResultCodeForCaptcha | ResultCodesEnum>>(`auth/login`, { email, password, rememberMe, captcha })
            .then(res => res.data);
    },
    logout() {
        return instance
            .delete(`auth/login`).then(res => res.data);
    },
};