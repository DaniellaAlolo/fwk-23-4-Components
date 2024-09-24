import styles from "./Header.module.css";
import ProfileAtom from "./ProfileAtom";
import TitleAtom from "./TitleAtom";
import SubtitleAtom from "./SubtitleAtom";
import { useState } from "react";
import AvatarAtom from "./AvatarAtom";
import { FaBell, FaCog } from "react-icons/fa";

const Header = ({ title, subtitle }) => {
  const [userName, setUserName] = useState("John Doe");
  const [avatar, setAvatar] = useState("");
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <TitleAtom title={title} />
          <SubtitleAtom subtitle={subtitle} />
        </div>

        <div className={styles.headerRight}>
          <FaBell className={styles.icon} title="Notifications" />
          <FaCog className={styles.icon} title="Settings" />
          <AvatarAtom avatar={avatar} onChangeAvatar={setAvatar} />
          <ProfileAtom userName={userName} />
        </div>
      </div>
    </>
  );
};

export default Header;
