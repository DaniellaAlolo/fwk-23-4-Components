import styles from './LoginForm.module.css';
import React from 'react';

const LoginSidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarContent}>
                <h1>Welcome to _______</h1>
                <p>Din AI-assistent för ökad produktivitet. Logga in för att komma igång!</p>

            </div>
        </div>
    );
}
export default LoginSidebar;