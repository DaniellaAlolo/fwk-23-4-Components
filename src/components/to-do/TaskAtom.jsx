import styles from "./ToDoBoard.module.css";

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
            <div className={styles.taskHeader}>
            <h2 className={styles.taskTitle}>{task.title}</h2>
            <div className={styles.taskCategory}>
                {task.category}
            </div>
            </div>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskAtom;
