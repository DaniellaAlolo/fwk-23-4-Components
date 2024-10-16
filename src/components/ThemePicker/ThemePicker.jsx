import React, { useState, useEffect } from "react";
import styles from "./ThemePicker.module.css";
import { themes } from "./Themes"; 

const ThemePicker = () => {
    const [selectedTheme, setSelectedTheme] = useState("light");

    const applyTheme = (themeName) => {
        const theme = themes[themeName];
        if (theme) {
            Object.keys(theme).forEach(key => {
                document.documentElement.style.setProperty(key, theme[key]);
            });
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setSelectedTheme(savedTheme);
        applyTheme(savedTheme); 
    }, []); 

    const handleThemeChange = (themeName) => {
        setSelectedTheme(themeName);
        localStorage.setItem("theme", themeName);
        applyTheme(themeName); 
    };

    return (
        <div className="themeWrapper">
            <h2>Select new theme</h2>
            <div className={styles.themes}>
                {Object.keys(themes).map((themeName) => (
                    <div
                        key={themeName}
                        onClick={() => handleThemeChange(themeName)}
                        className={`${styles.themeCircle} ${selectedTheme === themeName ? styles.selected : ""}`}
                        style={{ background: themes[themeName].gradient }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ThemePicker;
