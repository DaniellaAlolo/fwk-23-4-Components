import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import { IoCloseOutline } from "react-icons/io5";
import ModalForm from "./ModalFormAtom";
import DropdownAtom from "./DropdownAtom";
import RadioBtnAtom from "./RadioBtnAtom";
import Btn from "../btn/Btn";

const Modal = () => {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) return;

        const showModal = () => {
            dialog.showModal();
        };

        const closeModal = () => {
            dialog.close();
        };

        const showButton = dialog.previousElementSibling;
        const closeButton = dialog.querySelector("button");

        showButton.addEventListener("click", showModal);
        closeButton.addEventListener("click", closeModal);

        return () => {
            showButton.removeEventListener("click", showModal);
            closeButton.removeEventListener("click", closeModal);
        };
    }, []);

    return (
        <>
            <button className={styles.modalOpenBtn}>Open</button>
            <dialog className={styles.modal} ref={dialogRef}>
                <div className={styles.modalTab}>
                    <h3 className={styles.modalHeader}>Add new task</h3>
                    <form method="dialog">
                        <button className={styles.modalCloseBtn}>
                            <IoCloseOutline size={24} />
                        </button>
                    </form>
                </div>
                <div className={styles.modalBody}>
                    <ModalForm />
                    <DropdownAtom />
                    <RadioBtnAtom />
                    <Btn text="Add Task" />
                </div>
            </dialog>
        </>
    );
};

export default Modal;
