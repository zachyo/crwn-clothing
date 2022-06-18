import React  from "react"
import CustomButton from "../custom-button/custom-button.component.jsx";
import FormInput from "../form-input/form-input.component.jsx";
import '../signin/signin.styles.scss';
// import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from '../firebase/firebase.utils.js'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }


    HandleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: "", password: "" });
        } catch(error) {console.log(error)}
    }

    HandleChange = event => {
        const {name, value} = event.target;
        this.setState({[name] : value})
    }

    render() {
        return (
          <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.HandleSubmit}>
              <FormInput
                type="email"
                name="email"
                label="Email"
                value={this.state.email}
                onChange={this.HandleChange}
                required
              />
              <FormInput
                type="password"
                name="password"
                label="Password"
                value={this.state.password}
                onChange={this.HandleChange}
                required
              />
              <div className="buttons">
                <CustomButton type="submit" value="Submit form">
                  {" "}
                  Sign in
                </CustomButton>
                <CustomButton
                  onClick={signInWithGoogle}
                  value="Submit form"
                  isGoogleSignIn
                >
                  {" "}
                  Sign in with Google
                </CustomButton>
              </div>
            </form>
          </div>
        );
    }

}

export default SignIn;