import styles from "./chat.module.css";
import SendBtn from "./SendBtn";

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
