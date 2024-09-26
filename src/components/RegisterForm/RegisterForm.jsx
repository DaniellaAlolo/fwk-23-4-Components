import styles from "./RegisterForm.module.css";
import UsernameAtom from "./UsernameAtom";
import EmailAtom from "./EmailAtom";
import PasswordAtom from "./PasswordAtom";
import RegistrationStatus from "./RegistrationStatus";
import React from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";
import LoginSidebar from "../login/LoginSidebar";

const RegisterForm = ({
  userData = {}, // Default-värde
  handleUserChange,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
  registrationSuccess,
}) => {
  console.log({
    userData,
    handleUserChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    registrationSuccess,
  });
  console.log("handleUserChange:", handleUserChange);
  console.log("handleEmailChange:", handleEmailChange);
  console.log("handlePasswordChange:", handlePasswordChange);
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Förhindra sidladdning
    console.log("Form submitted"); // Debugging
    handleFormSubmit(); // Anropa submit-funktionen
  };
  return (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        <h1>AI APP NAME</h1>
        <form className={styles.form}>
          <h2 className={styles.title}>Register</h2>
          <UsernameAtom onChange={handleUserChange} value={userData.username} />
          <EmailAtom onEmailChange={handleEmailChange} value={userData.email} />
          <PasswordAtom
            onPasswordChange={handlePasswordChange}
            value={userData.password}
          />
          <Btn text="Register" icon={<MdOutlineAccountCircle />} onClick={handleFormSubmit} />
          <RegistrationStatus success={registrationSuccess} />
        </form>
        <a href="login">Already have a account? Go to login</a>
      </div>
      <LoginSidebar />
    </div>
  );
};

export default RegisterForm;
