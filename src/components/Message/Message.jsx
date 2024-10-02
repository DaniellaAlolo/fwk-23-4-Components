import AiAtom from "./AiAtom";
import styles from "./Message.module.css";
import React from "react";

const Message = ({ messages }) => {
    return (
        <div className={styles.messageWrapper}>
            {messages.map((msg, index) => (
                <div key={index} className={styles.messageContainer}>
                    {msg.type === 'user' ? (
                        <p className={styles.userMessage}>{msg.text}</p>
                    ) : (
                        <>
                            <AiAtom />
                            <p className={styles.aiMessage}>{msg.text}</p>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Message;
