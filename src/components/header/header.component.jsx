import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import "../header/header.styles.scss";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useState } from "react";

const Header = ({ currentUser, hidden }) => {
  // const history = useHistory();
//   console.log(currentUser)
// const changeNav = () => {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "options") {
//     x.className += " responsive";
//   } else {
//     x.className = "options";
//   }
// };
const [className, SetClassName] = useState("hamburger block md:hidden");
const [menu, SetMenu] = useState('hidden')
const change = (className) => {
  if (className === "hamburger") {
    SetClassName("open hamburger");
    SetMenu("");
    console.log(className);
  } else {
    SetClassName("hamburger");
    SetMenu("hidden");
  }
};
const oneChange = (className) => {
    SetClassName("hamburger");
    SetMenu("hidden");
}

  return (
    <nav>
      <div className="header">
        <Link
          to="/"
          className="logo-container"
          onClick={() => {
            oneChange(className);
          }}
        >
          <Logo />
        </Link>
        <div className="options" id="myTopnav">
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
          {/* Hamburger */}
          <Link
            to="#"
            id="menu-btn"
            className={className}
            onClick={() => {
              change(className);
            }}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-btm"></span>
          </Link>
        </div>
        {hidden ? null : <CartDropdown />}
      </div>

      <div
        className={menu}
        onClick={() => {
          change(className);
        }}
      >
        <div className="mobile-menu">
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
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.user.currentUser,
  hidden: store.cart.hidden,
});

export default connect(mapStateToProps)(Header);
