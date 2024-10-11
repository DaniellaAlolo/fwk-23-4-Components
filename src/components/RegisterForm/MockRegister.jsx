import { useState } from 'react';

const MockRegister = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Lista för registrerade användare
  const registeredUsers = useState([])[0];

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
    // Kontrollerar om användarnamnet eller e-posten redan finns
    const isUserRegistered = registeredUsers.some(
      (user) =>
        user.username === userData.username || user.email === userData.email
    );
    

    if (isUserRegistered) {
      setRegistrationSuccess(false);
      setErrorMessage("User with this username or email is already registered.");
    } else if (userData.username && userData.email && userData.password) {


      // Lägg till den nya användaren om registreringen är ny
      registeredUsers.push({ ...userData });
      setRegistrationSuccess(true);
      setErrorMessage("");
      console.log("Submission successful:", userData);
    } else {
      setRegistrationSuccess(false);
      setErrorMessage("All fields are required.");
      console.error("Submission failed: Missing fields");
    }
  };


  return {
    userData,
    handleUserChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    registrationSuccess,
    errorMessage,
  };
};

export default MockRegister;






