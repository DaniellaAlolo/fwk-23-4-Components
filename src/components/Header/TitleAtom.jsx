import styles from "./Header.module.css";

const TitleAtom = ({ title }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
    </>
  );
};

export default TitleAtom;
