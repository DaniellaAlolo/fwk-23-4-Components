import styles from "./Modal.module.css";

const ModalFormAtom = ({ taskName, setTaskName }) => {
    return (
        <form className={styles.form} action="">
            <label htmlFor="modalTextInput">What's your task?</label>
            <textarea
                id="modalTextInput"
                name="modalTextInput"
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
        </form>
    );
};

export default ModalFormAtom;
