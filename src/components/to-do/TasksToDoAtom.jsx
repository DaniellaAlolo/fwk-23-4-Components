import TaskAtom from "./TaskAtom";
import styles from "./ToDoBoard.module.css";
import { IoMdMore } from "react-icons/io";
import React from 'react';

const DoneAtom = ({ tasks, isEditing, editTask }) => {
    return (
        <div className={styles.toDoWrapper}>
            <div className={styles.columnTitle}>
                <h2>To do</h2>
                <IoMdMore size={20} />
            </div>
            <div className={styles.tasks}>
                {tasks.map((task) => (
                    <TaskAtom key={task.id} isEditing={isEditing}  task={task} onEdit={editTask} />
                ))}
            </div>
        </div>
    );
};

export default DoneAtom;