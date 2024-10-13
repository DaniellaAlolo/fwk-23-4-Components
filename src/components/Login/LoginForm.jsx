import React from "react";
import styles from "./LoginForm.module.css";
import { MdLogin } from "react-icons/md";
import Btn from "../Btn/Btn.jsx";
import LoginSidebar from "./LoginSidebar.jsx";
import { useAuth, EmailAtom, PasswordAtom } from "../../hooks/auth.jsx";

const LoginForm = () => {
  const { email, password, message, setEmail, setPassword, handleLoginClick } =
    useAuth();

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
