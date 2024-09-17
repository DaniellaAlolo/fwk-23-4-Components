import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import EmailLoginAtom from './EmailLoginAtom';
import PasswordLoginAtom from './PasswordLoginAtom';
import LoginBtn from './LoginBtn';
import LoginSidebar from './LoginSidebar';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <h1>AI APP NAME</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.title}>Login</h2>
          <EmailLoginAtom />
          <PasswordLoginAtom />
          <LoginBtn />
        </form>
        <a href="register">Don't have a account? Sign up</a>
      </div>
      <LoginSidebar />
    </div>
  );
};

export default LoginForm;


