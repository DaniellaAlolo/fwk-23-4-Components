import React, { createContext, useContext, useState } from "react";

export const FakeLoginContext = createContext({
  isLoggedIn: false,
  loading: false,
  error: null,
  login: () => {},
  logout: () => {},
});

export const FakeLoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username, password) => {
    console.log(
      `Successful Login attempted with username: ${username} and password: ${password}`
    );
    setIsLoggedIn(true);
  };

  const logout = () => {
    console.log("Successful Logout attempted");
    setIsLoggedIn(false);
  };

  const contextValue = {
    isLoggedIn: isLoggedIn,
    loading: false,
    error: null,
    login: login,
    logout: logout,
  };

  return (
    <FakeLoginContext.Provider value={contextValue}>
      {children}
    </FakeLoginContext.Provider>
  );
};

export const useFakeLogin = () => useContext(FakeLoginContext);
