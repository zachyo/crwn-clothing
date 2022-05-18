import cartActionTypes from "./cart.types"

export const toggleCartHidden = () => {
    return {type : cartActionTypes.CART_TOGGLE_HIDDEN}
}

export const addItem = item => {
    return {
        type : cartActionTypes.ADD_ITEM,
        payload : item
    }
}

export const delItem = (item) => {
  return {
    type: cartActionTypes.DEL_ITEM,
    payload: item,
  };
};