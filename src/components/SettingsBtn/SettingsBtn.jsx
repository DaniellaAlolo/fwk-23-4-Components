import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import styles from './SettingsBtn.module.css';

const SettingsBtn = () => {
    return (
      <button className={styles.settingsBtn}>
        <FontAwesomeIcon icon={faCog} className={styles.icon} />
        Settings
      </button>
    );
  };
  
  export default SettingsBtn;