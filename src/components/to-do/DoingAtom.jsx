import dummyTasks from "./dummyTasks.json";
import TaskAtom from "./TaskAtom";
import styles from "./ToDoBoard.module.css";
import { IoMdMore } from "react-icons/io";

const DoingAtom = () => {
    const doingTasks = dummyTasks.filter((task) => task.status === "doing");

    return (
        <div className={styles.doingWrapper}>
            <div className={styles.columnTitle}>
                <h2>Doing</h2>
                <IoMdMore size={20}/>
            </div>
            <div className={styles.doing}>
                {doingTasks.map((task) => (
                    <TaskAtom key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default DoingAtom;
