import styles from "./Message.module.css";
import { FaBrain } from "react-icons/fa";
import React from 'react';

const AiAtom = () => {
    return (
        <div className={styles.aiAvatar}>
            <FaBrain
                style={{ marginLeft: "auto", marginRight: "auto" }}
                size={20}
                color="white"
            />
        </div>
    );
};

export default AiAtom;
