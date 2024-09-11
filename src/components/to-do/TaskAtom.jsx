import styles from "./ToDoBoard.module.css";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const TaskAtom = ({ task }) => {
    const taskClass =
        task.status === "to-do"
            ? styles.taskToDo
            : task.status === "doing"
              ? styles.taskInProgress
              : task.status === "done"
                ? styles.taskDone
                : "";

    return (
        <div className={`${styles.task} ${taskClass}`}>
            <h2 className={styles.taskTitle}>{task.title}</h2>
            <p>{task.description}</p>
            <div className={styles.taskControls}>
                <button><MdOutlineModeEdit />Edit</button>
                <button><MdDeleteOutline />Delete</button>
            </div>
        </div>
    );
};

export default TaskAtom;
