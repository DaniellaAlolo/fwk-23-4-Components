import TaskAtom from './TaskAtom';
import styles from "./ToDoBoard.module.css";
import { IoMdMore } from "react-icons/io";
import dummyTasks from "./dummyTasks.json";
import React from 'react';

const TasksToDoAtom = () => {
    const toDoTasks = dummyTasks.filter(task => task.status === 'to-do');

    return (
        <div className={styles.toDoWrapper}>
            <div className={styles.columnTitle}>
                <h2>To do</h2>
                <IoMdMore size={20} />
            </div>
            <div className={styles.tasks}>
                {toDoTasks.map((task) => (
                    <TaskAtom key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TasksToDoAtom;