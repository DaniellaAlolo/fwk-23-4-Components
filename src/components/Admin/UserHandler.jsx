import { useAddUser } from "./userHooks";
import styles from "./css/UserHandler.module.css";
import React from "react";
import { UsernameAtom, EmailAtom, PasswordAtom, RoleAtom } from "../Atoms";
import Btn from "../Btn/Btn";

const UserHandler = () => {
    return (
        <div className={styles.userHandler}>
            <div className={styles.actionsWrapper}>
                <div className={styles.action}>
                    <h3>Add user</h3>
                    <form action={useAddUser}>
                        <UsernameAtom />
                        <EmailAtom />
                        <PasswordAtom />
                        <RoleAtom />
                    </form>
                    <Btn text="Add user" backgroundColor={"lightGreen"} />
                </div>
                <div className={styles.action}>
                    <h3>Remove user</h3>
                    <form action={useAddUser}>
                        <UsernameAtom />
                    </form>
                    <Btn text="Remove user" backgroundColor={"red"} />
                </div>
            </div>
        </div>
    );
};

export default UserHandler;
