import React from 'react';
import styles from "./RegisterForm.module.css";

const EmailAtom = ({ onChange, value }) => {
  const handleEmailChange = (e) => {
    onChange(e.target.value);
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
