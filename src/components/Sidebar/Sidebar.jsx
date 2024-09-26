import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faTasks } from '@fortawesome/free-solid-svg-icons';  
import styles from './Sidebar.module.css';  
import React from 'react';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarItem}>
          <a href="#Home">
            <FontAwesomeIcon icon={faHome} className={styles.icon} />
            Home
          </a>
        </li>
        <li className={styles.sidebarItem}>
          <a href="#Login">
            <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} />
            Login
          </a>
        </li>
        <li className={styles.sidebarItem}>
          <a href="#todo">
            <FontAwesomeIcon icon={faTasks} className={styles.icon} />
            To-do
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
