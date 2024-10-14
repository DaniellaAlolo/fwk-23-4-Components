import styles from "./CookieConsent.module.css";

const CookieConsent = () => {

    const setCookie = (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = `${cname}=${cvalue}; ${expires}; path=/`;
    };

    const handleConsent = () => {
        const uuid = crypto.randomUUID();
        setCookie("userId", uuid, 365);
    };

    const handleOptOut = () => {
        setCookie('userId', '', -1);       
        alert("You have opted out of cookies");
    };

    return (
        <div className={styles.cookiebar}>
            <div className={styles.textWrapper}>
                <p>Do you want cookies?</p>
                <p>We use cookies to optimize your experience.</p>
            </div>
            <div className={styles.btnGroup}>
                <button className={styles.cookieBtn1} onClick={handleConsent}>
                    Opt in
                </button>
                <button className={styles.cookieBtn2} onClick={handleOptOut}>Opt out</button>
            </div>
        </div>
    );
};

export default CookieConsent;
