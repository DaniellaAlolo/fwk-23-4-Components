import styles from './LoginForm.module.css';
import { MdAlternateEmail } from "react-icons/md";

const EmailLoginAtom = ({ onEmailChange, label = "Email" }) => {
  if (!onEmailChange) {
    return (
      <>
        <b>onChange function required for email!</b><br />
      </>
    );
  }

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
        <input className={styles.input}
          onChange={handleChange}
          type="email" id="login-email" name="email" />
      </div>
    </div>
  );
};

export default EmailLoginAtom;

