import React, { useState } from "react";
import { useAddUser } from "./userHooks";
import styles from "./css/UserHandler.module.css";
import { UsernameAtom, EmailAtom, PasswordAtom, RoleAtom } from "../Atoms";
import Btn from "../Btn/Btn";

const UserHandler = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");

    const { addUser, error } = useAddUser();

    const handleAddUser = async (e) => {
        e.preventDefault();
        const result = await addUser({ email, username, password, role });
        if (result) {
            console.log("User added successfully:", result);
        }
    };

    return (
        <div className={styles.userHandler}>
            <div className={styles.actionsWrapper}>
                <div className={styles.action}>
                    <h3>Add user</h3>
                    <form onSubmit={handleAddUser}>
                        <div className="inputWrapper">
                            <UsernameAtom
                                username={username}
                                onUsernameChange={setUsername}
                            />
                            <EmailAtom email={email} onEmailChange={setEmail} />
                            <PasswordAtom
                                password={password}
                                onPasswordChange={setPassword}
                            />
                            <RoleAtom role={role} onRoleChange={setRole} />
                        </div>
                        <Btn
                            text="Add user"
                            backgroundColor={"lightGreen"}
                            onClick={handleAddUser}
                        />
                    </form>
                    {error && <p className={styles.error}>{error}</p>}
                </div>
                <div className={styles.action}>
                    <h3>Remove user</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <UsernameAtom />
                        <Btn text="Remove user" backgroundColor={"red"} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserHandler;
