import styles from "./Header.module.css";

const TitleAtom = ({ subtitle }) => {
  return (
    <>
      <h3 className={styles.subtitle} />
      <span> {subtitle}</span>
    </>
  );
};
export default TitleAtom;
