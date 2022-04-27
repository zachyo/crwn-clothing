import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDoc } from '../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import "../signup/signup.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      password: "",
      retypePassword: "",
      email: "",
      // id: '',
    };
  }

  HandleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, password, email, retypePassword } = this.state;
    if (password !== retypePassword) {
        alert("Passwords don't match")
        return;
    }

    try { 
        const {user} = await auth.createUserWithEmailAndPassword(email, password)
        await createUserProfileDoc(user, {displayName});
        this.setState({
          displayName: "",
          password: "",
          retypePassword: "",
          email: "",
        });

    } catch(error) {
        console.log(error)
    }
  };

  HandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, password, email, retypePassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.HandleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            onChange={this.HandleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={this.HandleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.HandleChange}
            required
          />
          <FormInput
            type="password"
            name="retypePassword"
            label="Retype Password"
            value={retypePassword}
            onChange={this.HandleChange}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp