import styles from "./ToDoBoard.module.css";
import React, { useState } from 'react';

const TaskAtom = ({ task }) => {
    const taskClass =
        task.status === "to-do"
            ? styles.taskToDo
            : task.status === "doing"
                ? styles.taskInProgress
                : task.status === "done"
                    ? styles.taskDone
                    : "";

    const [taskHeader, setTaskHeader] = useState(task.title);
    const [taskCategory, setTaskCategory] = useState(task.category);
    const [taskDescription, setTaskDescription] = useState(task.title);


    return (
        <div className={`${styles.task} ${taskClass}`}>
            <div className={styles.taskHeader}>
                <h3 className={styles.taskTitle}>{taskHeader}</h3>
                <div className={styles.taskCategory}>
                    {taskCategory}
                </div>
            </div>
            <p>{taskDescription}</p>
        </div>
    );
};

export default TaskAtom;

