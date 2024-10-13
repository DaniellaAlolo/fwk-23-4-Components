import React, { useState } from "react";
import EmailAtom from "../components/Login/EmailAtom";
import PasswordAtom from "../components/Login/PasswordAtom";

export const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLoginClick = () => {
    if (email === "user@test.com" && password === "password") {
      console.log("Login successful");
      setMessage("Login successful");
    } else {
      console.log("login failed.");
      setMessage("Login failed. Try again");
    }
  };

  return {
    email,
    password,
    message,
    setEmail,
    setPassword,
    setMessage,
    handleLoginClick,
  };
};

export { EmailAtom, PasswordAtom };
