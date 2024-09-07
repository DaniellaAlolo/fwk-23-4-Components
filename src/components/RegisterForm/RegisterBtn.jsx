import styles from "./RegisterForm.module.css";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const RegisterBtn = () => {
  return (
    <>
      <button type="submit" className={styles.registerBtn}>
        <FaPaperPlane className={styles.icon} />
        Register
      </button>
    </>
  );
};

export default RegisterBtn;
