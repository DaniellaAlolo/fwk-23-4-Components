import React from 'react';
import styles from "./RegisterForm.module.css";

const UsernameAtom = ({ onChange, value }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="username">
        Username
      </label>
      <input
        className={styles.input}
        type="text"
        id="username"
        onChange={handleChange}
        value={value}
        placeholder="Enter username"
      />
    </div>
  );
};

export default UsernameAtom;

