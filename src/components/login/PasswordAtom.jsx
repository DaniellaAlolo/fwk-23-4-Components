import styles from './LoginForm.module.css';
import React from 'react';
import { useState } from 'react';
import { IoKeyOutline } from "react-icons/io5";

const PasswordAtom = ({ onPasswordChange, label = "Password" }) => {
  const [showPassword, setShowPassword] = useState(false);
  if (!onPasswordChange) {
    return (
      <>
        <b>onChange function required for password!</b><br />
      </>
    );
  }
  const handleChange = (e) => {
    onPasswordChange(e.target.value);
  }
  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="login-password">{label}</label>
      <div className={styles.inputWrapper}>
        <IoKeyOutline className={styles.icon} />
        <input
          type={showPassword ? "text" : "password"}
          className={styles.input}
          onChange={handleChange}
          id="login-password"
          name="password" />
      </div>
      <div>
        <label>
          <input
            name="checkbox"
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          <span className="label-text">Show password</span>
        </label>
      </div>
    </div>
  );
};
export default PasswordAtom;