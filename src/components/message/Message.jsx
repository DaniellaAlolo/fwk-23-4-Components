import styles from './message.module.css'

const Message = () => {
    return ( 
        <div className={styles.messageContainer}>
            <p className={styles.message}>Api response</p>
        </div>
     );
}
 
export default Message;