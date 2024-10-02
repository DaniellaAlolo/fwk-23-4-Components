import styles from "./Sidebar.module.css";
import React from "react";
import { MdLogin, MdOutlineHome, MdChecklist } from "react-icons/md";
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarItem}>
                    <a href="/">
                        <MdOutlineHome size={20}/>
                        Home
                    </a>
                </li>
                <li className={styles.sidebarItem}>
                    <a href="/login">
                        <MdLogin size={20}/>
                        Login
                    </a>
                </li>
                <li className={styles.sidebarItem}>
                    <a href="/dashboard">
                        <MdChecklist size={20}/>
                        Tasks
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
