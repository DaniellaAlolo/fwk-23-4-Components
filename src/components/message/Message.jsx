import AiAtom from "./AiAtom";
import styles from "./message.module.css";
import Btn from "../btn/Btn"
import React from 'react';
import { MdAdd } from "react-icons/md";


const Message = () => {
    return (
        <div className={styles.messageWrapper}>
            <AiAtom />
            <div className={styles.messageContainer}>
                <p className={styles.message}>Api response</p>
                <Btn icon={<MdAdd />}  text="Add Task"/>
            </div>
        </div>
    );
};

export default Message;
