/*import styles from "./RegisterForm.module.css";

const UsernameAtom = ({ onUserChange, value = "", label = "Username" }) => {
  const handleUserChange = (e) => {
    onUserChange(e.target.value);
  };

  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>
        {label}:
        <input
          className={styles.input}
          type="text"
          id="username"
          onChange={handleUserChange}
          value={value}
          placeholder="Enter usernamne"
        />
      </label>
    </div>
  );
};

export default UsernameAtom;
*/
import styles from "./RegisterForm.module.css";
import React from 'react';

const UsernameAtom = ({ onUserChange, value }) => {
  const handleChange = (e) => {
    onUserChange(e.target.value);
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
