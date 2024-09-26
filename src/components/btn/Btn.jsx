import styles from './Btn.module.css';
import React from 'react';

const Button = ({ text, onClick, icon, backgroundColor }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <button className={styles.submitBtn} style={buttonStyle} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
