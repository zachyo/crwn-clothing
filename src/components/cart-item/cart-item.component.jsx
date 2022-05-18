import './cart-item.styles.scss'

const CartItem = ({item}) => {
    const { imageUrl, quantity, price, name} = item

  return (
    <div className="cart-item">
      <img src={imageUrl} alt="Item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
