import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
// import { withRouter} from 'react-router-dom';

const CartDropdown = ({ cartItems, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={()=> dispatch(toggleCartHidden())}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (store) => ({
  cartItems: store.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
