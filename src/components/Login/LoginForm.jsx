import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import EmailLoginAtom from './EmailLoginAtom';
import PasswordLoginAtom from './PasswordLoginAtom';
import LoginBtn from './LoginBtn';  

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Login</h2>
      <EmailLoginAtom />
      <PasswordLoginAtom />
      <LoginBtn />  
    </form>
  );
};

export default LoginForm;

