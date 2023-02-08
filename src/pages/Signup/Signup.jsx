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
      <div className="leftContainer">
        {/* <img className="sign-up-img" src="./landingImages/img4.jpg" alt="" /> */}
      </div>
      <div className="rightContainer">
        <h1>Create Account</h1>
        <p>{message}</p>
        <SignupForm {...props} updateMessage={updateMessage} />
      </div>
    </main>
  );
};

export default Signup;
