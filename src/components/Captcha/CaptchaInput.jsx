import React from "react";
import styles from "./Captcha.module.css"

const CaptchaInput = ({ onCaptchaInputChange, captchaInput }) => {

    const handleChange = (e) => {
        onCaptchaInputChange(e.target.value);
    };

    return (
        <div className={styles.captchaInputWrapper}>
            <input className={styles.captchaInput} type="text" name="captcha" onChange={handleChange} id="captcha" placeholder="Enter captcha text" value={captchaInput} />
            <label htmlFor="captcha"></label>
        </div>
    );
}

export default CaptchaInput;