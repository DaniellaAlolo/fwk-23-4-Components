import { useEffect, useRef } from "react";

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
            <button>open</button>
            <dialog ref={dialogRef}>
                <div className="dialogContent">Hello</div>
                <form method="dialog">
                    <button>Close</button>
                </form>
            </dialog>
        </>
    );
};

export default Modal;
