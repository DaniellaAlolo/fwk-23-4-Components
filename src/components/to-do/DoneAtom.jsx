import dummyTasks from './dummyTasks.json';
import TaskAtom from './TaskAtom';
import styles from "./ToDoBoard.module.css";
import { IoMdMore } from "react-icons/io";

const DoneAtom = () => {
    const doneTasks = dummyTasks.filter(task => task.status === 'done');

    return (
        <div className={styles.doneWrapper}>
            <div className={styles.columnTitle}>
                <h2>Done</h2>
                <IoMdMore size={20}/>
            </div>            <div className={styles.done}>
                {doneTasks.map((task) => (
                    <TaskAtom key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default DoneAtom;