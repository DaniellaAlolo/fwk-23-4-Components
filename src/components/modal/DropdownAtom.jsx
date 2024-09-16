import styles from './Modal.module.css'

const DropdownAtom = ({ category, setCategory }) => {
    return (
        <form action="">
            <label>Choose category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} name="taskCategory" id="taskCategory">
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