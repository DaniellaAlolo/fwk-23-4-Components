import dummyTasks from './dummyTasks.json';
import TaskAtom from './TaskAtom';
import styles from "./ToDoBoard.module.css";

const DoingAtom = () => {
    const doingTasks = dummyTasks.filter(task => task.status === 'doing');

    return (
        <div className={styles.doing}>
            {doingTasks.map(task => (
                <TaskAtom key={task.id} task={task} />
            ))}
        </div>
    );
};

export default DoingAtom;