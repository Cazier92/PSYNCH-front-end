import { useState } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import styles from "./Signup.module.css";

const Signup = (props) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <main className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.leftInfo}>
          <h1>Create your login</h1>
          <p>
            We'll need your name, email address, and a unique password. You'll
            use this login to access Psynch next time.
          </p>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h1>Sign Up</h1>
        <p>{message}</p>
        <SignupForm {...props} updateMessage={updateMessage} />
      </div>
    </main>
  );
};

export default Signup;
