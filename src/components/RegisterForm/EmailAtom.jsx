import styles from "./RegisterForm.module.css";
import React from 'react';

const EmailAtom = ({ onEmailChange, value }) => {
  const handleEmailChange = (e) => {
    onEmailChange(e.target.value);
  };
  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="email">
        Email
      </label>
      <input
        className={styles.input}
        type="email"
        id="email"
        name="email"
        onChange={handleEmailChange}
        value={value}
        placeholder="Enter email"
      />
    </div>
  );
};

export default EmailAtom;
