import { userTypes } from "./user.types"

export const setCurrentUser = (user) => {
    return {
    type : userTypes.SET_CURRENT_USER,
    payload : user
    }   
}

export const googleSigninStart = () => ({
    type : userTypes.GOOGLE_SIGNIN_START
})
export const googleSigninSuccess = (user) => ({
  type: userTypes.GOOGLE_SIGNIN_SUCCESS,
  payload : user
});
export const googleSigninFailure = (error) => ({
  type: userTypes.GOOGLE_SIGNIN_FAILURE,
  payload : error
});