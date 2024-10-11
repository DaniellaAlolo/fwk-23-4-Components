import styles from './CookieConsent.module.css';

const CookieConsent = () => {
    return (
        <div className={styles.cookiebar}>
            <div className={styles.textWrapper}>
                <p>Do you want cookies?</p>
                <p>We use cookies to optimize your experience.</p>
            </div>
            <div className={styles.btnGroup}>
                <button className={styles.cookieBtn1}>
                    Opt in
                </button>
                <button className={styles.cookieBtn2}>
                    Opt out
                </button>
            </div>
        </div>
    );
}

export default CookieConsent;