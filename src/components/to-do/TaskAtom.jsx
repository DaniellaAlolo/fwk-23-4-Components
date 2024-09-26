import styles from "./ToDoBoard.module.css";
import React from 'react';

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
            <h3 className={styles.taskTitle}>{task.title}</h3>
            <div className={styles.taskCategory}>
                {task.category}
            </div>
            </div>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskAtom;
