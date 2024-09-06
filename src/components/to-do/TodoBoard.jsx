import styles from "./ToDoBoard.module.css";
import TasksAtom from "./TasksAtom";
import DoingAtom from "./DoingAtom";
import DoneAtom from "./DoneAtom";

const TodoBoard = () => {
    return (
        <div className={styles.toDoBoard}>
            <TasksAtom />
            <DoingAtom />
            <DoneAtom />
        </div>
    );
};

export default TodoBoard;
