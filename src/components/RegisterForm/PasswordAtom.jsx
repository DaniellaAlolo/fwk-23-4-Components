import React from "react";
import styles from "./RegisterForm.module.css";

const PasswordAtom = ({ onChange, value }) => {
  const handlePasswordChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="password">
        Password
      </label>
      <input
        className={styles.input}
        type="password"
        id="password"
        name="password"
        onChange={handlePasswordChange}
        value={value}
        placeholder="Enter password"
      />
    </div>
  );
};

export default PasswordAtom;
