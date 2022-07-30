import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import '../signin&signup/signinandsignup.styles.scss'
// import CurrentUserContext from "../../components/context/current-user/current-user.context";
// import { useContext } from "react";

const SignInandSignUpPage = ({currentUser}) => {

  // const currentUser = useContext(CurrentUserContext)

    const navigate = useNavigate();
    
    return (
      <div className="">
        {currentUser ? (
          navigate("/")
          // console.log('no user')
        ) : (
          <div className="signin-and-signup">
            <SignIn />
            <SignUp />
          </div>
        )}
      </div>
    );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
 
export default connect(mapStateToProps)(SignInandSignUpPage);