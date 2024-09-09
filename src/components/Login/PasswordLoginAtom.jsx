import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';  
import styles from './LoginForm.module.css';

const PasswordLoginAtom = () => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="login-password">Password</label>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon icon={faLock} className={styles.icon} />  
        <input className={styles.input} type="password" id="login-password" name="password" />
      </div>
    </div>
  );
};

export default PasswordLoginAtom;
