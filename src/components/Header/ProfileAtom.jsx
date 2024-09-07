import styles from "./Header.module.css";
import React from "react";
import { FaUser } from "react-icons/fa";

const ProfileAtom = () => {
  return (
    <>
      <div className={styles.profile}>
        <FaUser className={styles.icon} />
      </div>
    </>
  );
};
export default ProfileAtom;
