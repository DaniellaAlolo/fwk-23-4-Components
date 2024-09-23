import styles from "./Header.module.css";

const TitleAtom = ({ subtitle }) => {
  return (
    <>
      <h3 className={styles.subtitle}>{subtitle}</h3>
    </>
  );
};
export default TitleAtom;
