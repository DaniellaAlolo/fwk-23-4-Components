import styles from "./Header.module.css";
import React from "react";

const TitleAtom = ({ title }) => {
  return (
    <>
      {!title}
      {title && <h2 className={styles.title}>{title}</h2>}
    </>
  );
};

export default TitleAtom;
