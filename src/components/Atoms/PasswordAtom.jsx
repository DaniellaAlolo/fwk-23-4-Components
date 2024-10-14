import styles from "../Login/LoginForm.module.css";
import React, { useState } from "react";
import { IoKeyOutline } from "react-icons/io5";

const PasswordAtom = ({ password, onPasswordChange, label = "Password" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    onPasswordChange(e.target.value);
  };

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="login-password">
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <IoKeyOutline className={styles.icon} />
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          className={styles.input}
          onChange={handleChange}
          id="login-password"
          name="password"
          required
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={handleShowPasswordChange}
          />
          <span className="label-text">Show password</span>
        </label>
      </div>
    </div>
  );
};

export default PasswordAtom;
