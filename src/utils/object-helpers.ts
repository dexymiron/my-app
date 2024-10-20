import { UserType } from "../redux/types/types";




export const updateObjectInArray = (items:Array<UserType>, itemId:any, objPropName: keyof UserType, newObjProps: { followed: boolean }):Array<UserType> => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}