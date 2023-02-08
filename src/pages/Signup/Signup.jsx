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
        <div className="header">
          <h1>Welcome</h1>
          <p>Please enter your details!</p>
        </div>
        <p>{message}</p>
        <SignupForm {...props} updateMessage={updateMessage} />
      </div>
      
      <div className="leftContainer">
        <div className="overlay"></div>
        <img className="sign-up-img" src="./landingImages/img4.jpg" alt="" />
        {/* <p className="img-msg1"><span>"</span><br/>The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. </p>
        <p className="img-msg2">Hellen Keller</p>
        <p className="img-msg3">PSYNCH</p> */}
      </div>
      
    </main>
  );
};

export default Signup;
