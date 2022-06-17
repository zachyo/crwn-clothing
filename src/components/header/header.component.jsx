import Link  from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg.svg';
import {auth} from '../firebase/firebase.utils'
import { connect } from "react-redux";
import "../header/header.styles.scss";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";


const Header = ({currentUser,hidden}) => {

// const history = useHistory(); 

    return (
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo />
        </Link>
        <div className="options">
          <Link to="/shop" className="option">
            SHOP
          </Link>
          <Link to="/shop" className="option">
            CONTACT
          </Link>
          {/* <div>{console.log(currentUser)}</div> */}
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
        </div>{hidden ? null : <CartDropdown/>}
        {/* <CartDropdown /> */}
      </div>
    );
}

const mapStateToProps = store => ({
  currentUser : store.user.currentUser,
  hidden : store.cart.hidden
})
 
export default connect(mapStateToProps)(Header);