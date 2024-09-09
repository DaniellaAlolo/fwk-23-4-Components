import styles from './Navbar.module.css'; 

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