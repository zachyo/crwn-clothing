import { userTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser : null,
    error : null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case userTypes.SET_CURRENT_USER:
        return {
          ...state,
          currentUser: action.payload,
        };
      case userTypes.GOOGLE_SIGNIN_SUCCESS:
      case userTypes.EMAIL_SIGNIN_SUCCESS:
        return {
          ...state,
          currentUser: action.payload,
          error: null,
        };
      case userTypes.GOOGLE_SIGNIN_FAILURE:
      case userTypes.EMAIL_SIGNIN_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      // case userTypes.SET_CURRENT_USER:
      //   return {
      //     ...state,
      //     currentUser: action.payload,
      //   };
      default:
        return state;
    }
};

export default userReducer;