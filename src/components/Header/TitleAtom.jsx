import styles from "./Header.module.css";
import React from 'react';

const TitleAtom = ({ title }) => {
  return (
    <>
      <h2 className={styles.title}>Ai Assistant</h2>
    </>
  );
};

export default TitleAtom;
