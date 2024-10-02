import styles from './Navbar.module.css'; 
import React from 'react';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#Home">Home</a></li>
        <li className={styles.navItem}><a href="#Login">Login</a></li>
        <li className={styles.navItem}><a href="#todo">To-do</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

/* // Navbar.jsx
import styles from './Navbar.module.css'; 
import React from 'react';
import LoginForm from './LoginForm';

const Navbar = ({ onNavigate }) => {
    return (
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <button onClick={() => onNavigate('home')}>Home</button>
            </li>
            <li className={styles.navItem}>
              <button onClick={() => onNavigate('login')}>Login</button>
            </li>
            <li className={styles.navItem}>
              <button onClick={() => onNavigate('todo')}>To-do</button>
            </li>
          </ul>
        </nav>
    );
};

export default Navbar; */

