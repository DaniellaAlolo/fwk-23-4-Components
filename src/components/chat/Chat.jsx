import styles from "./Chat.module.css";
import SendBtn from "./SendBtn";
import React from 'react';

const Chat = () => {
    return (
        <div className={styles.chatWrapper}>
            <div className={styles.chat}>
                <textarea
                    name="promptText"
                    id={styles.promptText}
                    placeholder="Message Assistant"
                ></textarea>
            </div>
            <SendBtn className={styles.sendBtn} />
        </div>
    );
};

export default Chat;
