import { useState } from "react";
import EmailAtom from "../components/Login/EmailAtom";
import PasswordAtom from "../components/Login/PasswordAtom";

export const useAuth = () => {
  const [users, setUsers] = useState([
    { email: "user@test.com", password: "password" },
  ]);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // Handle login logic
  const handleLoginClick = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setMessage("Login successful");
    } else {
      setMessage("Login failed. Try again");
    }
  };
  // Handle registration logic
  const handleRegisterClick = (email, password) => {
    // Kontrollera om e-postadressen redan är registrerad
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      setMessage("Registration failed. Email already in use.");
    } else {
      // Lägg till den nya användaren
      setUsers([...users, { email, password }]);
      setMessage("Registration successful");
    }
  };

  return {
    users,
    password,
    message,
    setUsers,
    setPassword,
    setMessage,
    handleLoginClick,
    handleRegisterClick,
  };
};

export { EmailAtom, PasswordAtom };
