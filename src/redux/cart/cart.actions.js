import cartActionTypes from "./cart.types"

export const toggleCartHidden = () => {
    return {type : cartActionTypes.CART_TOGGLE_HIDDEN}
}