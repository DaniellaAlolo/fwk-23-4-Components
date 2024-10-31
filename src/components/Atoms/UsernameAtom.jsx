import styles from "../Login/LoginForm.module.css";
import { MdAlternateEmail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import React from "react";

const UsernameAtom = ({ username, onUsernameChange, label = "Username" }) => {
    const handleChange = (e) => {
        onUsernameChange(e.target.value);
    };

    return (
        <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="login-username">
                {label}
            </label>
            <div className={styles.inputWrapper}>
                <CiUser className={styles.icon} />
                <input
                    className={styles.input}
                    onChange={handleChange}
                    value={username}
                    type="username"
                    id="login-username"
                    name="username"
                    required
                />
            </div>
        </div>
    );
};
export default UsernameAtom;
