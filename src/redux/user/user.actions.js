import { userTypes } from "./user.types"

export const setCurrentUser = (user) => {
    return {
    type : userTypes.SET_CURRENT_USER,
    payload : user
    }   
}
