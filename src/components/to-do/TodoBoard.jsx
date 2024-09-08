import styles from "./ToDoBoard.module.css";
import TasksToDoAtom from "./TasksToDoAtom";
import DoingAtom from "./DoingAtom";
import DoneAtom from "./DoneAtom";

const TodoBoard = () => {
    return (
        <div className={styles.toDoBoard}>
            <TasksToDoAtom />
            <DoingAtom />
            <DoneAtom />
        </div>
    );
};

export default TodoBoard;
