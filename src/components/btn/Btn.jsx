import styles from './Btn.module.css';
import React from 'react';

const Button = ({ text, onClick, icon }) => {
  console.log(icon);
  return (
    <button className={styles.submitBtn} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

export default Button;

