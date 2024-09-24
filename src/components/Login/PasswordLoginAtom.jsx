import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import styles from './LoginForm.module.css';
import { useState } from 'react';

const PasswordLoginAtom = ({ onPasswordChange, label = "Password" }) => {
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
        <FontAwesomeIcon icon={faLock} className={styles.icon} />
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

export default PasswordLoginAtom;
