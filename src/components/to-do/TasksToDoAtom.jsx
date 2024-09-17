import dummyTasks from './dummyTasks.json';
import TaskAtom from './TaskAtom';
import styles from "./ToDoBoard.module.css";

const TasksToDoAtom = () => {
    const toDoTasks = dummyTasks.filter(task => task.status === 'to-do');

    return (
        <div className={styles.toDoWrapper}>
            <h2>To do</h2>
            <div className={styles.tasks}>
                {toDoTasks.map((task) => (
                    <TaskAtom key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TasksToDoAtom;