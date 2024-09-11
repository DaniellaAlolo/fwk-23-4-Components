import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import { IoCloseOutline } from "react-icons/io5";

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
                    <form method="dialog">
                        <button className={styles.modalCloseBtn}>
                            <IoCloseOutline size={20} />
                        </button>
                    </form>
                </div>
                <h3 className={styles.modalHeader}>Modal Header</h3>
                <p className={styles.dialogContent}>Modal body</p>
            </dialog>
        </>
    );
};

export default Modal;
