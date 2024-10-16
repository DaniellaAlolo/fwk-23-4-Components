import React, { useState, useEffect } from "react";
import styles from "./themePicker.module.css";
import { themes } from "./Themes";

const ThemePicker = () => {
    const [selectedTheme, setSelectedTheme] = useState("light"); 

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        console.log(savedTheme);
        if (savedTheme && themes[savedTheme]) {
            setSelectedTheme(savedTheme);
        }
        applyTheme(selectedTheme); 
    }, []); 

    const applyTheme = (themeName) => {
        const theme = themes[themeName];
        Object.keys(theme).forEach((key) => {
            document.documentElement.style.setProperty(key, theme[key]);
        });
    };

    const handleThemeChange = (themeName) => {
        setSelectedTheme(themeName);
        localStorage.setItem("theme", themeName);
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
