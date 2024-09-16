import styles from "./ToDoBoard.module.css";
import TasksToDoAtom from "./TasksToDoAtom";
import DoingAtom from "./DoingAtom";
import DoneAtom from "./DoneAtom";
import AddTaskBtn from "./AddTaskBtn";
import { MdOutlineModeEdit } from "react-icons/md";
import { useRef } from "react";
import Modal from "../modal/Modal";

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
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 20,
                    }}
                >
                    <h1>To-Do Board</h1>
                    <AddTaskBtn onClick={openModal} />
                    <Modal ref={modalRef} />
                </div>
                <div className={styles.taskControls}>
                    <button>
                        <MdOutlineModeEdit />
                        Edit
                    </button>
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
