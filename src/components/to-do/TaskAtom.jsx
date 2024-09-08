import styles from "./ToDoBoard.module.css";

const TaskAtom = ({task}) => {
    return ( 
        <div className={styles.task}>
            <h2>Task title</h2>
            <p>Task body</p>
        </div>
     );
}
 
export default TaskAtom;