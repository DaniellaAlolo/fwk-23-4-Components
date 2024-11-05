import { AccountDeletion } from "../DataDeletion";
import { DataRequest } from "../DataRequest";
import React from "react";
import styles from "./SettingsPanel.module.css";

const SettingsPanel = () => {
    return (
        <div className={styles.settingsWrapper}>
            <h2>Settings</h2>
            <div className={styles.settingsManagement}>
                <AccountDeletion />
                <DataRequest />
            </div>
        </div>
    );
}

export default SettingsPanel;