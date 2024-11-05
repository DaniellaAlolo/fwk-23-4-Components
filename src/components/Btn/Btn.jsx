import styles from "./Btn.module.css";
import React from "react";

const Button = ({
  text,
  onClick,
  icon,
  onSubmit,
  backgroundColor,
  type = "button",
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <button
      type={type}
      className={styles.submitBtn}
      style={buttonStyle}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
