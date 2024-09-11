import AiAtom from "./AiAtom";
import styles from "./message.module.css";
import AddTaskBtn from "../to-do/AddTaskBtn"

const Message = () => {
    return (
        <div className={styles.messageWrapper}>
            <AiAtom />
            <div className={styles.messageContainer}>
                <p className={styles.message}>Api response</p>
            <AddTaskBtn />
            </div>
        </div>
    );
};

export default Message;
