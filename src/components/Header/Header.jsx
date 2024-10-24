import styles from "./Header.module.css";
import ProfileAtom from "./ProfileAtom";
import TitleAtom from "./TitleAtom";
import SubtitleAtom from "./SubtitleAtom";
import React, { useState } from "react";
import AvatarAtom from "./AvatarAtom";
import { FaBell, FaCog } from "react-icons/fa";
import AvatarDisplayAtom from "./AvatarDisplayAtom";

const Header = ({
  title = "AI Assistant",
  subtitle = "Smart Solutions for an Easier Everyday",
  className,
}) => {
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <>
      <div className={`${styles.headerContainer} ${className}`}>
        <div className={styles.headerLeft}>
          <TitleAtom title={title} />
          <SubtitleAtom subtitle={subtitle} />
        </div>

        <div className={styles.headerRight}>
          <FaBell className={styles.icon} title="Notifications" />
          <FaCog className={styles.icon} title="Settings" />
          <AvatarAtom avatar={avatar} onChangeAvatar={setAvatar} />
          <ProfileAtom userName={userName} />
          <AvatarDisplayAtom avatar={avatar} />
        </div>
      </div>
    </>
  );
};

export default Header;
