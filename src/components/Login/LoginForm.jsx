import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { MdLogin } from "react-icons/md";
import Btn from "../Btn/Btn.jsx";
import LoginSidebar from "./LoginSidebar.jsx";
import { EmailAtom, PasswordAtom } from "../Atoms";
import { useAuth } from "../../hooks/auth.jsx";

const LoginForm = () => {
  const { message, handleLoginClick } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <form className={styles.form}>
          <h2 className={styles.title}>Login</h2>
          <EmailAtom email={email} onEmailChange={setEmail} />
          <PasswordAtom password={password} onPasswordChange={setPassword} />
          <Btn
            text="Login"
            type="submit"
            icon={<MdLogin />}
            onClick={() => handleLoginClick(email, password)}
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
