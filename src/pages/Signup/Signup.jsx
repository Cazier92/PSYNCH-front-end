import { useState } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import styles from "./Signup.css";

const Signup = (props) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <main className="container">
      <div className="leftContainer">
        <div className="leftInfo">
          <h1>Create your login</h1>
          <p>
            We'll need your name, email address, and a unique password. You'll
            use this login to access Psynch next time.
          </p>
        </div>
      </div>
      <div className="rightContainer">
        <h1>Sign Up</h1>
        <p>{message}</p>
        <SignupForm {...props} updateMessage={updateMessage} />
      </div>
    </main>
  );
};

export default Signup;
