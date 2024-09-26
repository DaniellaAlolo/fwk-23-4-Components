import TaskAtom from "./TaskAtom";
import styles from "./ToDoBoard.module.css";
import { IoMdMore } from "react-icons/io";
import React from 'react';

const DoneAtom = ({ tasks, isEditing, editTask }) => {
    return (
        <div className={styles.doneWrapper}>
            <div className={styles.columnTitle}>
                <h2>Done</h2>
                <IoMdMore size={20} />
            </div>
            <div className={styles.done}>
                {tasks.map((task) => (
                    <TaskAtom key={task.id} task={task} onEdit={editTask} isEditing={isEditing} />
                ))}
            </div>
        </div>
    );
};

export default DoneAtom;
