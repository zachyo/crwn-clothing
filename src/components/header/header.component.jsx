import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import "../header/header.styles.scss";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CurrentUserContext from "../context/current-user/current-user.context";
import { useContext } from "react";

const Header = ({ hidden }) => {
const currentUser = useContext(CurrentUserContext)
console.log(currentUser)

  // const history = useHistory();
const changeNav = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "options") {
    x.className += " responsive";
  } else {
    x.className = "options";
  }
};

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options" id='myTopnav'>
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
        <Link className="option dropdown" to='#' onClick={changeNav}>=</Link>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (store) => ({
  // currentUser: store.user.currentUser,
  hidden: store.cart.hidden,
});

export default connect(mapStateToProps)(Header);
