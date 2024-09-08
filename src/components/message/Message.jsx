import AiAtom from "./AiAtom";
import styles from "./message.module.css";

const Message = () => {
    return (
        <div className={styles.messageWrapper}>
            <AiAtom />
            <div className={styles.messageContainer}>
                <p className={styles.message}>Api response</p>
            </div>
        </div>
    );
};

export default Message;
