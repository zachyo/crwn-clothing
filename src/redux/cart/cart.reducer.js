import cartActionTypes from "./cart.types";
import { addItemToCart, delItem } from "./cart.utils";

const INITIAL_STATE = {
    hidden : true,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
      case cartActionTypes.CART_TOGGLE_HIDDEN:
        return {
          ...state,
          hidden: !state.hidden,
        };
      case cartActionTypes.ADD_ITEM:
        return {
          ...state,
          cartItems : addItemToCart(state.cartItems, action.payload)
          
        };

      case cartActionTypes.DEL_ITEM :
        return {
          ...state,
          cartItems : delItem(state.cartItems, action.payload)
        };  

      default:
        return state;
    }
}

export default cartReducer;