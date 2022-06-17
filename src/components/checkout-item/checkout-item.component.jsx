import { connect } from "react-redux";
import { addItem, delItem, delOne } from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, delItem,addItem,delOne }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>delOne(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={() => delItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    delItem : item => dispatch(delItem(item)),
    addItem : item => dispatch(addItem(item)),
    delOne : item => dispatch(delOne(item))
})

export default connect(null, mapDispatchToProps) (CheckoutItem);
