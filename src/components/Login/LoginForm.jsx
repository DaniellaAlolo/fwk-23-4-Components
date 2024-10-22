import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { MdLogin } from "react-icons/md";
import Btn from "../Btn/Btn.jsx";
import LoginSidebar from "./LoginSidebar.jsx";
import { EmailAtom, PasswordAtom } from "../Atoms";
import axios from "axios";
import { Header } from "../Header";

const LoginForm = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      // Skicka POST-anrop till din backend
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password },
        { withCredentials: true } // för att skicka med cookies i förfrågan
      );

      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        console.log("lyckad login", accessToken);
        setMessage("Login successful");
        setToken(accessToken);
        setIsLoggedIn(true);
        document.cookie = `accessToken=${accessToken}; path=/`; // Sparar token i en cookie TA BORT DENNA
      }
    } catch (error) {
      console.log("misslyckad loggin", setToken);
      setMessage("Login failed. Try again");
    }
  };

  if (isLoggedIn) {
    return <Header token={token} />;
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <form className={styles.form} onSubmit={handleLoginClick}>
          <h2 className={styles.title}>Login</h2>
          <EmailAtom email={email} onEmailChange={setEmail} />
          <PasswordAtom password={password} onPasswordChange={setPassword} />
          <Btn text="Login" type="submit" icon={<MdLogin />} />
          {message && (
            <p
              className={`${styles.message} ${
                message.includes("successful") ? styles.success : styles.error
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
      <LoginSidebar />
    </div>
  );
};

export default LoginForm;
