import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

const LoginPage = (props) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <main className="container">
      <div className="leftContainer">
        <img className="sign-up-img" src="./landingImages/img3.jpg" alt="" />
      </div>
      <div className="rightContainer">
        <div className="header">
          <h1>Welcome back!</h1>
          <p>Please enter your login details.</p>
          <p className="err-message">{message}</p>
        </div>
        <LoginForm
          handleSignupOrLogin={props.handleSignupOrLogin}
          updateMessage={updateMessage}
        />
      </div>
    </main>
  );
};

export default LoginPage;
