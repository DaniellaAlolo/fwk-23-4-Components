import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './LoginForm.module.css';

const EmailLoginAtom = () => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="login-email">Email

      </label>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        <input className={styles.input} type="email" id="login-email" name="email" />
      </div>
    </div>
  );
};

export default EmailLoginAtom;

