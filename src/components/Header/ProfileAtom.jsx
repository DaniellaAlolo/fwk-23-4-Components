import styles from "./Header.module.css";
import React from "react";

const ProfileAtom = ({ userName }) => {
  return (
    <>
      <div>
        <span> {userName} </span>
      </div>
    </>
  );
};
export default ProfileAtom;
