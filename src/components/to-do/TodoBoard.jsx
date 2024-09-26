import styles from "./ToDoBoard.module.css";
import TasksToDoAtom from "./TasksToDoAtom";
import DoingAtom from "./DoingAtom";
import DoneAtom from "./DoneAtom";
import { MdOutlineModeEdit, MdAdd } from "react-icons/md";
import { useRef, useState } from "react";
import Modal from "../taskModal/Modal";
import Btn from '../btn/Btn';
import React from 'react';
import dummyTasks from "./dummyTasks.json";

const TodoBoard = () => {
    const modalRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const [tasks, setTasks] = useState(dummyTasks);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    const editTask = (id, newContent) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, content: newContent } : task
            )
        );
    };

    const toggleEditMode = () => {
        setIsEditing((prevIsEditing) => !prevIsEditing);
    };

    return (
        <div className={styles.boardWrapper}>
            <div className={styles.boardHeader}>
                <h1>To-Do Board</h1>
                <Modal ref={modalRef} />
                <Btn icon={<MdAdd />} text="Add task" onClick={openModal} />
                <Btn icon={<MdOutlineModeEdit />} text="Edit tasks" onClick={toggleEditMode} />
            </div>
            <div className={styles.toDoBoard}>
                <TasksToDoAtom tasks={tasks.filter((task) => task.status === 'to-do')} isEditing={isEditing} editTask={editTask} />
                <DoingAtom tasks={tasks.filter((task) => task.status === 'doing')} isEditing={isEditing} editTask={editTask} />
                <DoneAtom tasks={tasks.filter((task) => task.status === 'done')} isEditing={isEditing} editTask={editTask} />
            </div>
        </div>
    );
};

export default TodoBoard;
