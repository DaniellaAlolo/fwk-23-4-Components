import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';  
import styles from './LoginForm.module.css';  

const LoginBtn = () => {
  return (
    <button type="submit" className={styles.submitButton}>  
      <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} />
      Login
    </button>
  );
};

export default LoginBtn;

