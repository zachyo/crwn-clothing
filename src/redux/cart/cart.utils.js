export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existing = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existing) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return[...cartItems, {...cartItemToAdd, quantity : 1}]
};

export const delItem = (cartItems, cartItemToDel) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToDel.id)
}