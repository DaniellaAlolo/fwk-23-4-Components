import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { MdLogin } from "react-icons/md";
import Btn from "../Btn/Btn.jsx";
import LoginSidebar from "./LoginSidebar.jsx";
import { EmailAtom, PasswordAtom } from "../Atoms";
import { useAuth } from "../../hooks/auth.jsx";
import axios from "axios";

const LoginForm = () => {
  const { message, setMessage } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      // Skicka POST-anrop till din backend
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setMessage("Login successful");
      }
    } catch (error) {
      setMessage("Login failed. Try again");
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <form className={styles.form} onSubmit={handleLoginClick}>
          <h2 className={styles.title}>Login</h2>
          <EmailAtom email={email} onEmailChange={setEmail} />
          <PasswordAtom password={password} onPasswordChange={setPassword} />
          <Btn text="Login" type="submit" icon={<MdLogin />} />
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
