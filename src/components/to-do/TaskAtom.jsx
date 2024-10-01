import styles from "./TodoBoard.module.css";
import React, { useState } from 'react';
import Btn from '../btn/Btn'

const TaskAtom = ({ task, isEditing, editTask }) => {
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
    const [taskDescription, setTaskDescription] = useState(task.description);

    const handleSave = () => {
        editTask(task.id, {
            title: taskHeader,
            category: taskCategory,
            description: taskDescription,
        });
    };

    return (
        <div className={`${styles.task} ${taskClass}`}>
            {isEditing ? (
                <div className={styles.taskEdit}>
                    <input
                        type="text"
                        className={styles.taskTitleInput}
                        value={taskHeader}
                        onChange={(e) => setTaskHeader(e.target.value)}
                    />
                    <input
                        type="text"
                        className={styles.taskCategoryInput}
                        value={taskCategory}
                        onChange={(e) => setTaskCategory(e.target.value)}
                    />
                    <textarea
                        className={styles.taskDescriptionInput}
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                    />
                    <Btn text='Save' onClick={handleSave} />
                </div>
            ) : (
                <div>
                    <div className={styles.taskHeader}>
                        <h3 className={styles.taskTitle}>{taskHeader}</h3>
                        <div className={styles.taskCategory}>
                            {taskCategory}
                        </div>
                    </div>
                    <p>{taskDescription}</p>
                </div>
            )}
        </div>
    );
};

export default TaskAtom;
