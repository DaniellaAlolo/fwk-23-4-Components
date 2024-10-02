import styles from "./Chat.module.css";
import { BsArrowUp } from "react-icons/bs";
import React from 'react';

const SendBtn = ({ onClick }) => {
    return (
        <button className={styles.sendBtn} onClick={onClick}>
            <BsArrowUp color="white" size={20}/>
        </button>
    );
};

export default SendBtn;
