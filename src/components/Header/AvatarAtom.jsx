import styles from "./Header.module.css";
import { FaUser } from "react-icons/fa";
import React, { useState } from 'react';

const avatars = [
  "https://i.pravatar.cc/200?img=1",
  "https://i.pravatar.cc/200?img=2",
  "https://i.pravatar.cc/200?img=3",
  "https://i.pravatar.cc/200?img=48", // Lägg till fler bilder om du vill
];

const AvatarAtom = ({ avatar, onChangeAvatar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectAvatar = (selectedAvatar) => {
    onChangeAvatar(selectedAvatar);
    setIsOpen(false);
  };

  return (
    <div className={styles.profile}>
      <div onClick={toggleDropdown}>
        {avatar ? (
          <img src={avatar} alt="User avatar" className={styles.avatarImage} />
        ) : (
          <FaUser className={styles.icon} />
        )}
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {avatars.map((url, index) => (
            <div
              key={index}
              className={styles.avatarCard}
              onClick={() => selectAvatar(url)}
            >
              <img
                src={url}
                alt={`Avatar ${index + 1}`}
                className={styles.avatarImage}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvatarAtom;
