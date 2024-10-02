import styles from "./LoginForm.module.css";
import { MdAlternateEmail } from "react-icons/md";
import React from "react";

const EmailAtom = ({ email, onEmailChange, label = "Email" }) => {
  const handleChange = (e) => {
    onEmailChange(e.target.value);
  };

  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="login-email">
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <MdAlternateEmail className={styles.icon} />
        <input
          className={styles.input}
          onChange={handleChange}
          value={email}
          type="email"
          id="login-email"
          name="email"
        />
      </div>
    </div>
  );
};
export default EmailAtom;
