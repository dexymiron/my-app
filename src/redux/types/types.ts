export type PostType = {
id: number
message: string
likesCount: number
}
export type ContactsType = {
facebook: string
github: string
instagram: string
mainLink: null
twitter: string
vk: string | null
website: null
youtube: null
}
export type PhotosType = {
small: string | null
large: string | null
}
export type ProfileType = {
aboutMe: string
contacts:ContactsType
lookingForAJob: boolean,
lookingForAJobDescription: string,
fullName: string
photos: PhotosType
}



export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
  }
