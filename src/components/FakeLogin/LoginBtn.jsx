import React from "react";
import styles from "./FakeLogin.module.css"; // Import the CSS module

const LoginBtn = ({ onClick }) => {
  return (
    <button className={styles.submitButton} onClick={onClick}>
      Login
    </button>
  );
};

export default LoginBtn;
