import styles from './Modal.module.css'

const ModalFormAtom = () => {
    return ( 
        <form className={styles.form} action="">
            <label htmlFor="modalTextInput">What's your task?</label>
            <textarea id="modalTextInput" name="modalTextInput" type="text" />
        </form>
     );
}
 
export default ModalFormAtom;