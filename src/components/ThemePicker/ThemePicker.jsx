import React from "react";
import styles from "./ThemePicker.module.css";
import { themes, useTheme } from "./Themes"; 

const ThemePicker = () => {
    const { selectedTheme, changeTheme } = useTheme(); 

    return (
        <div className="themeWrapper">
            <h2>Select new theme</h2>
            <div className={styles.themes}>
                {Object.keys(themes).map((themeName) => (
                    <div
                        key={themeName}
                        onClick={() => changeTheme(themeName)} 
                        className={`${styles.themeCircle} ${selectedTheme === themeName ? styles.selected : ""}`}
                        style={{ background: themes[themeName].gradient }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ThemePicker;