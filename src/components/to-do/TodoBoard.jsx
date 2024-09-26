import styles from "./ToDoBoard.module.css";
import TasksToDoAtom from "./TasksToDoAtom";
import DoingAtom from "./DoingAtom";
import DoneAtom from "./DoneAtom";
import { MdOutlineModeEdit, MdAdd } from "react-icons/md";
import React, { useRef } from "react";
import Modal from "../taskModal/Modal";
import Btn from '../btn/Btn'

const TodoBoard = () => {
    const modalRef = useRef(null);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    return (
        <div className={styles.boardWrapper}>
            <div className={styles.boardHeader}>
                <h1>To-Do Board</h1>
                <Btn icon={<MdAdd />} text="Add task" onClick={openModal} />
                <Modal ref={modalRef} />
                <div className={styles.taskControls}>
                    <Btn icon={<MdOutlineModeEdit />} text="Edit tasks" onClick={openModal} />
                </div>
            </div>
            <div className={styles.toDoBoard}>
                <TasksToDoAtom />
                <DoingAtom />
                <DoneAtom />
            </div>
        </div>
    );
};

export default TodoBoard;
