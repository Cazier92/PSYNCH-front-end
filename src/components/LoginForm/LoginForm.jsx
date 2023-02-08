import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import * as authService from "../../services/authService";

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    pw: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    props.updateMessage("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await authService.login(formData);
      props.handleSignupOrLogin();
      navigate("/main-feed");
    } catch (err) {
      props.updateMessage(err.message);
    }
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}
      >
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              className={styles.inputField}
              type="text"
              autoComplete="off"
              id="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              className={styles.inputField}
              type="password"
              autoComplete="off"
              id="password"
              value={formData.pw}
              name="pw"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <button className={styles.button}>
            Login
          </button>
        </div>
        <p className={styles.redirect}>New to PSYNCH? <a href="/signup">Sign Up</a></p> 
      </form>
    </>
  );
};

export default LoginForm;
