import React, { useState } from "react";
import styles from "./FakeLogin.module.css";
import UserAtom from "./UserAtom";
import PasswordAtom from "./PasswordAtom";
import LoginBtn from "./LoginBtn";
import { useLogin } from "../Providers";

const FakeLogin = ({ defaultUser = "", defaultPassword = "" }) => {
  const { login, loading, error } = useLogin(); // Get login function, loading state, and error message from LoginProvider
  const [user, setUser] = useState(defaultUser); // Initialize user state with defaultUser
  const [password, setPassword] = useState(defaultPassword); // Initialize password state with defaultPassword
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      await login(user, password); // Call the login function from LoginProvider with user and password
      setMessage("Login successful!");
    } catch {
      setMessage("Login failed!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <UserAtom onUserChange={setUser} defaultValue={defaultUser} />
        <PasswordAtom
          onPasswordChange={setPassword}
          defaultValue={defaultPassword}
        />
        <LoginBtn onClick={handleLogin} />

        {message && (
          <div
            className={`${styles.message} ${
              message.includes("successful") ? styles.success : styles.error
            }`}
          >
            <b>{message}</b>
          </div>
        )}

        {/* Display error message if an error occurs during login */}
        {error && (
          <div className={styles.error}>
            <b>{error}</b>
          </div>
        )}
      </div>
    </div>
  );
};

export default FakeLogin;
