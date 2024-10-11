import React from "react";
import styles from "./RegisterForm.module.css";
import UsernameAtom from "./UsernameAtom";
import EmailAtom from "./EmailAtom";
import PasswordAtom from "./PasswordAtom";
import { MdOutlineAccountCircle } from "react-icons/md";
import LoginSidebar from "../Login/LoginSidebar";
import Btn from "../Btn/Btn";

const RegisterForm = ({
  userData = {}, // Default-värde
  handleUserChange,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
  registrationSuccess,
  errorMessage,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Förhindra sidladdning
    console.log("Form submitted"); // Debugging
    handleSubmit(); 
  };

  return (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        <h1>AI APP NAME</h1>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <h2 className={styles.title}>Register</h2>
          <UsernameAtom onChange={handleUserChange} value={userData.username} />
          <EmailAtom onChange={handleEmailChange} value={userData.email} />
          <PasswordAtom
            onChange={handlePasswordChange}
            value={userData.password}
          />
          <Btn
            text="Register"
            icon={<MdOutlineAccountCircle />}
            onClick={handleFormSubmit}
          />
          {registrationSuccess ? (
            <p style={{ color: "green" }}>Registration Successful!</p>
          ) : (
            <p style={{ color: "red" }}>{errorMessage}</p>
          )}
        </form>
        <a href="login">Already have an account? Go to login</a>
      </div>
      <LoginSidebar />
    </div>
  );
};

export default RegisterForm;
