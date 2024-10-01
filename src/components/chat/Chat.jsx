
import styles from "./Chat.module.css";
import SendBtn from "./SendBtn";
import React, { useRef } from 'react';

const Chat = () => {
    const textareaRef = useRef(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto'; 
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    return (
        <div className={styles.chatWrapper}>
            <div className={styles.chat}>
                <textarea
                    ref={textareaRef}
                    name="promptText"
                    id={styles.promptText}
                    placeholder="Message Assistant"
                    onInput={handleInput} 
                ></textarea>
            </div>
            <SendBtn className={styles.sendBtn} />
        </div>
    );
};

export default Chat;
