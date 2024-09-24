import  Sidebar  from "../../components/Sidebar/Sidebar";
import { TodoBoard } from "../../components/to-do";
import styles from './TaskView.module.css'

const TaskView = () => {
    return ( 
        <div className={styles.taskView}>
            <Sidebar />
            <TodoBoard />
        </div>
     );
}
 
export default TaskView;