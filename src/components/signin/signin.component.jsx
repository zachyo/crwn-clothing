import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component.jsx";
import FormInput from "../form-input/form-input.component.jsx";
import "../signin/signin.styles.scss";
// import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase/firebase.utils.js";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
};

export default SignIn;
