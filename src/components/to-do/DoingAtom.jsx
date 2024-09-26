import TaskAtom from "./TaskAtom";
import styles from "./ToDoBoard.module.css";
import { IoMdMore } from "react-icons/io";
import React from 'react';

const DoingAtom = ({ tasks, isEditing, editTask }) => {
    return (
        <div className={styles.doingWrapper}>
            <div className={styles.columnTitle}>
                <h2>Doing</h2>
                <IoMdMore size={20} />
            </div>
            <div className={styles.doing}>
                {tasks.map((task) => (
                    <TaskAtom key={task.id} isEditing={isEditing}  task={task} onEdit={editTask} />
                ))}
            </div>
        </div>
    );
};

export default DoingAtom;
