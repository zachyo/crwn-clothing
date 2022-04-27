import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import '../signin&signup/signinandsignup.styles.scss'

const SignInandSignUpPage = () => {
    return ( <div className="signin-and-signup">
        <SignIn />
        <SignUp />
    </div> );
}
 
export default SignInandSignUpPage;