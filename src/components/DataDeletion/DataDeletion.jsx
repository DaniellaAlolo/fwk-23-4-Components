import styles from "./DataDeletion.module.css";
import Btn from "../Btn/Btn";
import { MdOutlineDelete } from "react-icons/md";
import React from "react";

const DataDeletion = () => {

    const handleAccountDeletion = async () => {

    };

    return (
        <div className={styles.wrapper}>
            <h3>Delete your account</h3>
            <p>Delete all your account and all associated information with your account.</p>
            <Btn onClick={handleAccountDeletion} text={"Delete Account"} backgroundColor="red" icon={<MdOutlineDelete />} />
        </div>
    );
}

export default DataDeletion;