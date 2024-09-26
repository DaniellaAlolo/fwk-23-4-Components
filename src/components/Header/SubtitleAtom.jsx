import styles from "./Header.module.css";
import React from 'react';

const SubtitleAtom = ({ subtitle }) => {
  return (
    <>
      {!subtitle && <p>Must have subtitle</p>}
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
    </>
  );
};
export default SubtitleAtom;
