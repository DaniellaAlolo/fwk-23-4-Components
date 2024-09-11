import dummyTasks from './dummyTasks.json';
import TaskAtom from './TaskAtom';
import styles from "./ToDoBoard.module.css";

const DoneAtom = () => {
    const doneTasks = dummyTasks.filter(task => task.status === 'done');

    return (
        <div className={styles.doneWrapper}>
            <h2>Done</h2>
            <div className={styles.done}>
                {doneTasks.map((task) => (
                    <TaskAtom key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default DoneAtom;