import { useState } from "react";
import React from 'react';

const useMockRegister = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //state för registeringsstatus (propagating)
  const [registrationSuccess, setRegistrationSuccsess] = useState(false);

  const handleUserChange = (username) => {
    setUserData((prevData) => ({ ...prevData, username }));
  };

  const handleEmailChange = (email) => {
    setUserData((prevData) => ({ ...prevData, email }));
  };

  const handlePasswordChange = (password) => {
    setUserData((prevData) => ({ ...prevData, password }));
  };

  const handleSubmit = () => {
    const testUsername = "testuser";
    const testEmail = "user@user.com";
    const testPassword = "testpassword";

    if (
      userData.username === testUsername &&
      userData.email === testEmail &&
      userData.password === testPassword
    ) {
      console.log("Submitting:", userData);
      setRegistrationSuccsess(true); // Eller vad du nu vill göra
      setRegistrationSuccsess(true);
      console.log("Mock login successful!");
    } else {
      setRegistrationSuccsess(false);
      console.error("Mock login failed: Invalid username or password");
    }
  };
  console.log({
    userData,
    handleUserChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    registrationSuccess,
  });

  return {
    userData,
    handleUserChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    registrationSuccess,
  };
};

export default useMockRegister;
