import React, { useState } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component.jsx";
import './contact.styles.scss'

const Contact = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    message: "",
  });
  const { email, message } = userCredentials;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  const handleSubmit = () => {};

  return (
    <div className="contact">
      <h2 className="title">Contact Us</h2>
      <span>Send us a message or a review</span>
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
          type="text"
          name="message"
          label="Message"
          value={message}
          onChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit" value="Submit form">
            {" "}
            Send
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Contact;
