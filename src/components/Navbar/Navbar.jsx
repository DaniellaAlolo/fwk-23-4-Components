import styles from './Navbar.module.css'; 
import React from 'react';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/">Home</a></li>
        <li className={styles.navItem}><a href="/login">Login</a></li>
        <li className={styles.navItem}><a href="/dashboard">To-do</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;