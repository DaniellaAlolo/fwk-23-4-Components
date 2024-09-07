import styles from "./Header.module.css";
import ProfileAtom from "./ProfileAtom";
import TitleAtom from "./TitleAtom";

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <ul className={styles.headerList}>
          <li className={styles.listItem}>
            <h2 className={styles.title}>
              Header
              <span>
                <TitleAtom />
              </span>
            </h2>
          </li>
          <li className={styles.listItem}>
            <ProfileAtom />
            <span>User: John Doe</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
