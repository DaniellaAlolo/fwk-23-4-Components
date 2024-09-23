import styles from "./Header.module.css";
import { FaUser } from "react-icons/fa";

const AvatarAtom = ({ avatar }) => {
  return (
    <>
      <div className={styles.profile}>
        {avatar ? (
          <img src={avatar} alt="User avatar" className={styles.avatarImage} />
        ) : (
          <FaUser className={styles.icon} />
        )}
      </div>
    </>
  );
};
export default AvatarAtom;
