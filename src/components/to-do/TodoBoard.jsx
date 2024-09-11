import styles from "./ToDoBoard.module.css";
import TasksToDoAtom from "./TasksToDoAtom";
import DoingAtom from "./DoingAtom";
import DoneAtom from "./DoneAtom";
import AddTaskBtn from "./AddTaskBtn";

const TodoBoard = () => {
    return (
        <div className={styles.boardWrapper}>
            <div className={styles.boardHeader}>
                <h1>To-Do Board</h1>
                <AddTaskBtn />
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
