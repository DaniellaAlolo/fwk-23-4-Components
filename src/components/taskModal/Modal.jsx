import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";
import styles from "./Modal.module.css";
import { IoCloseOutline } from "react-icons/io5";
import ModalForm from "./ModalFormAtom";
import DropdownAtom from "./DropdownAtom";
import RadioBtnAtom from "./RadioBtnAtom";
import Btn from "../btn/Btn";

const Modal = forwardRef((props, ref) => {
  const dialogRef = useRef(null);

  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");

  useImperativeHandle(ref, () => ({
    showModal() {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    },
    closeModal() {
      if (dialogRef.current) {
        dialogRef.current.close();
      }
    }
  }));


  return (
    <dialog className={styles.modal} ref={dialogRef}>
      <div className={styles.modalTab}>
        <h3 className={styles.modalHeader}>Add new task</h3>
        <form method="dialog">
          <Btn icon={<IoCloseOutline />} />
        </form>
      </div>
      <div className={styles.modalBody}>
        <ModalForm taskName={taskName} setTaskName={setTaskName} />
        <DropdownAtom category={category} setCategory={setCategory} />
        <RadioBtnAtom status={status} setStatus={setStatus} />
        <Btn text="Add Task" />

        {/* <Btn text="Add Task" onClick={handleTaskSubmit} /> */}
      </div>
    </dialog>
  );
});

Modal.displayName = "Modal";

export default Modal;

