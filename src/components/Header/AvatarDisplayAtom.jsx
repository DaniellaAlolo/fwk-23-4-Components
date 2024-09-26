import styles from "./Header.module.css";
import React from 'react';

const AvatarDisplayAtom = ({ avatar, username }) => {
  return (
    <>
      <div className={styles.avatarDisplay}>
        <h1>Avatar Display</h1>
        {avatar ? (
          <img
            src={avatar}
            alt="User Avatar"
            className={styles.avatarDisplayImg}
          />
        ) : (
          <span>No avatar Selected</span>
        )}
        <div className={styles.username}>
          {username ? username : "Moo Deng"}
        </div>
      </div>
    </>
  );
};

export default AvatarDisplayAtom;
