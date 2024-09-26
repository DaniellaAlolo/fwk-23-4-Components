import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faTasks } from "@fortawesome/free-solid-svg-icons";
import styles from "./Sidebar.module.css";
import React from "react";
import { MdLogin, MdOutlineHome, MdChecklist } from "react-icons/md";
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarItem}>
                    <a href="/">
                        <MdOutlineHome />
                        Home
                    </a>
                </li>
                <li className={styles.sidebarItem}>
                    <a href="#Login">
                        <MdLogin />
                        Login
                    </a>
                </li>
                <li className={styles.sidebarItem}>
                    <a href="/dashboard">
                        <MdChecklist />
                        Tasks
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
