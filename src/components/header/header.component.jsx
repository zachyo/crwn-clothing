import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg.svg';
import '../header/header.styles.scss';
import {auth} from '../firebase/firebase.utils'

const Header = ({currentUser}) => {
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
    );
}
 
export default Header;