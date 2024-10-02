import LogoImage from './Logo.jpg';
import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <img
      src={LogoImage}
      alt="Logo"
      className={styles.logo} 
      style={{ width: '100%', maxWidth: '200px', height: 'auto' }} 
    />
  );
};

export default Logo;
