import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDoc } from '../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import "../signup/signup.styles.scss";

const SignUp = () => {
  const [userCredentials, setCredentials] = useState({
      displayName: "",
      password: "",
      retypePassword: "",
      email: "",
    })
    const { displayName, password, email, retypePassword } = userCredentials;



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== retypePassword) {
      console.log(this.state)
        alert("Passwords don't match")
        return;
    }

    try { 
        const {user} = await auth.createUserWithEmailAndPassword(email, password)
        await createUserProfileDoc(user, {displayName});
        setCredentials({
          displayName: "",
          password: "",
          retypePassword: "",
          email: "",
        });
        console.log(user)
    } catch(error) {
        console.log(error)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials , [name]: value });
    console.log(userCredentials)
  };

    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up as a new user</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            onChange={handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <FormInput
            type="password"
            name="retypePassword"
            label="Retype Password"
            value={retypePassword}
            onChange={handleChange}
            required
          />
          <CustomButton type="submit" onclick={handleSubmit}>
            SIGN UP
            {/* <button type="submit">Create Account</button> */}
          </CustomButton>
        </form>
      </div>
    );

}

export default SignUp