import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import EmailAtom from './EmailAtom.jsx';
import PasswordAtom from './PasswordAtom.jsx';
import { MdLogin } from "react-icons/md";
import Btn from '../btn/Btn';
import LoginSidebar from './LoginSidebar';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLoginClick = () => {
        if (loginFunction) {
            loginFunction(email, password);
        } else {
            console.error('No login function provided!');
            console.error('Email:', email);
            console.error('Password:', password);
        }
    };
    return (
        <div className={styles.login}>
            <div className={styles.loginWrapper}>
                <h1>AI APP NAME</h1>
                <form className={styles.form}>
                    <h2 className={styles.title}>Login</h2>
                    <EmailAtom onEmailChange={setEmail} />
                    <PasswordAtom onPasswordChange={setPassword} />
                    <Btn text="Login" icon={<MdLogin />} onClick={handleLoginClick} />
                </form>
                <a href="register">Don't have a account? Sign up</a>
            </div>
            <LoginSidebar />
        </div>
    );
};
export default LoginForm;