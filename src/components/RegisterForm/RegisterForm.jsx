import React from "react";
import styles from "./RegisterForm.module.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import LoginSidebar from "../Login/LoginSidebar";
import Btn from "../Btn/Btn";
import { useAuth, EmailAtom, PasswordAtom } from "../../hooks/auth";

const RegisterForm = () => {
  const { email, password, message, setEmail, setPassword, handleLoginClick } =
    useAuth();

  // Här kan du anpassa handleLoginClick eller skapa en ny funktion för registrering
  const handleRegisterClick = () => {
    // Använd samma login-logik eller modifiera för registrering
    handleLoginClick();
  };

  return (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        <h1>AI APP NAME</h1>
        <form className={styles.form}>
          <h2 className={styles.title}>Register</h2>
          <EmailAtom email={email} onEmailChange={setEmail} />
          <PasswordAtom password={password} onPasswordChange={setPassword} />
          <Btn
            text="Register"
            icon={<MdOutlineAccountCircle />}
            onClick={handleRegisterClick} // Använd registreringslogiken här
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
        <a href="login">Already have an account? Go to login</a>
      </div>
      <LoginSidebar />
    </div>
  );
};

export default RegisterForm;
