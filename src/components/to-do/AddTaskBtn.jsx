import { MdAdd } from "react-icons/md";

const AddTaskBtn = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            <MdAdd /> Add Task
        </button>
    );
};

export default AddTaskBtn;
