import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import EmailAtom from "./EmailAtom.jsx";
import PasswordAtom from "./PasswordAtom.jsx";
import { MdLogin } from "react-icons/md";
import Btn from "../btn/Btn";
import LoginSidebar from "./LoginSidebar";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLoginClick = () => {
    if (email === "user@test.com" && password === "password") {
      console.log("Login successful");
      setMessage("Login successful");
    } else {
      console.log("login failed.");
      setMessage("Login failed. Try again");
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <h1>AI APP NAME</h1>
        <form className={styles.form}>
          <h2 className={styles.title}>Login</h2>
          <EmailAtom email={email} onEmailChange={setEmail} />
          <PasswordAtom password={password} onPasswordChange={setPassword} />
          <Btn
            text="Login"
            type="submit"
            icon={<MdLogin />}
            onClick={handleLoginClick}
          />
          {message && (
            <p
              className={`${styles.message} ${
                message.includes("successful") ? styles.success : styles.error
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
      <LoginSidebar />
    </div>
  );
};
export default LoginForm;
