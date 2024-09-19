import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './LoginForm.module.css';

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
      <label className={styles.label} htmlFor="login-email">{label}
      </label>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        <input className={styles.input}
          onChange={handleChange}
          type="email" id="login-email" name="email" />
      </div>
    </div>
  );
};

export default EmailLoginAtom;

