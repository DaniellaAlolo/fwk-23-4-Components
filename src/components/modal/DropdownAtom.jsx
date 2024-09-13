import styles from './Modal.module.css'

const DropdownAtom = () => {
    return (
        <form action="">
            <label for="cars">Choose category:</label>
            <select name="taskCategory" id="taskCategory">
                <option value="food">Food</option>
                <option value="career">Career</option>
                <option value="school">School</option>
                <option value="health">Health</option>
                <option value="shopping">Shopping</option>
            </select>
        </form>
    );
}

export default DropdownAtom;