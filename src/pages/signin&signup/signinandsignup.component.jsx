import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import '../signin&signup/signinandsignup.styles.scss'

const SignInandSignUpPage = ({currentUser}) => {

    const navigate = useNavigate();
    
    return (
      <div className="">
        {currentUser ? (
          navigate("/")
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