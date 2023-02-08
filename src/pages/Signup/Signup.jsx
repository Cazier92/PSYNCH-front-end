import { useState } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import "./Signup.css";

const Signup = (props) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <main className="container">
      <div className="rightContainer">
        <div className="form-container">
          
        </div>
        <div className="header">
          <h1>Welcome</h1>
          <p>Please enter your details.</p>
          <p className="err-message">{message}</p>
        </div>
        <SignupForm {...props} updateMessage={updateMessage} />
      </div>
      
      <div className="leftContainer">
        <div className="overlay"></div>
        <img className="sign-up-img" src="./landingImages/img4.jpg" alt="" />
      </div>
      
    </main>
  );
};

export default Signup;
