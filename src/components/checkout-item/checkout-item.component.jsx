import { connect } from "react-redux";
import { delItem } from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, delItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button"onClick={()=> delItem(cartItem)}>&#10005;</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    delItem : item => dispatch(delItem(item))
})

export default connect(null, mapDispatchToProps) (CheckoutItem);
