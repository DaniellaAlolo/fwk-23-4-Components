import styles from "./LoginForm.module.css";
import React from "react";
import { useState } from "react";
import { IoKeyOutline } from "react-icons/io5";

const PasswordAtom = ({ password, onPasswordChange, label = "Password" }) => {
  const handleChange = (e) => {
    onPasswordChange(e.target.value);
  };
  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="login-password">
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <IoKeyOutline className={styles.icon} />
        <input
          type="password"
          value={password}
          className={styles.input}
          onChange={handleChange}
          id="login-password"
          name="password"
        />
      </div>
      <div>
        <label>
          <input
            name="checkbox"
            type="checkbox"
            checked={password}
            onChange={(e) => password(e.target.checked)}
          />
          <span className="label-text">Show password</span>
        </label>
      </div>
    </div>
  );
};
export default PasswordAtom;
