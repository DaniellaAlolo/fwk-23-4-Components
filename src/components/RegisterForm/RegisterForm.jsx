import styles from "./RegisterForm.module.css";
import UsernameAtom from "./UsernameAtom";
import EmailAtom from "./EmailAtom";
import PasswordAtom from "./PasswordAtom";
import RegisterBtn from "./RegisterBtn";
import RegistrationStatus from "./RegistrationStatus";
import React from 'react';

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
    <>
      <form className={styles.form}>
        <h2 className={styles.title}>Register</h2>
        <UsernameAtom onChange={handleUserChange} value={userData.username} />
        <EmailAtom onEmailChange={handleEmailChange} value={userData.email} />
        <PasswordAtom
          onPasswordChange={handlePasswordChange}
          value={userData.password}
        />
        <RegisterBtn />
        <RegistrationStatus success={registrationSuccess} />
      </form>
    </>
  );
};

export default RegisterForm;
