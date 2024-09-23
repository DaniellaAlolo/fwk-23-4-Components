import styles from "./Header.module.css";
import ProfileAtom from "./ProfileAtom";
import TitleAtom from "./TitleAtom";
import { useState } from "react";
import AvatarAtom from "./AvatarAtom";

const Header = ({ subtitle }) => {
  const [userName, setUserName] = useState("John Doe");
  const [avatar, setAvatar] = useState("");
  return (
    <>
      <div className={styles.headerContainer}>
        <ul className={styles.headerList}>
          <li className={styles.listItem}>
            <h2 className={styles.title}>
              <span>
                <TitleAtom subtitle={subtitle} />
              </span>
            </h2>
          </li>
          <li className={styles.listItem}>
            <AvatarAtom
              className={styles.icon}
              avatar={avatar}
              onChangeAvatar={setAvatar}
            />
            <ProfileAtom userName={userName} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
