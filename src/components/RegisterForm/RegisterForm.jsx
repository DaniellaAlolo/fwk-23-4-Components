import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import LoginSidebar from "../Login/LoginSidebar";
import Btn from "../Btn/Btn";
import { EmailAtom, PasswordAtom } from "../Atoms";
import { useAuth } from "../../hooks/auth";

const RegisterForm = () => {
  const { message, handleRegisterClick } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault(); // Förhindra standardinlämningen av formuläret
    handleRegisterClick(email, password); // Skicka email och password som argument
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
            onClick={handleRegister} // Använd registreringslogiken här
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
