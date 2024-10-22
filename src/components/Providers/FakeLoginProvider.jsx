import { createContext, useContext, useState } from "react";

// skapar context för att hantera login-state och funktionaltet
export const FakeLoginContext = createContext({
  isLoggedIn: false,
  loading: false,
  error: null,
  login: () => {},
  logout: () => {},
});

export const FakeLoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    console.log(`lyckad login med ${email} & ${password} med fakelogin`);
    setIsLoggedIn(true);
  };

  const logout = () => {
    console.log("lyckad utloggning");
    setIsLoggedIn(false);
  };

  const contextProvider = {
    isLoggedIn: isLoggedIn,
    loading: false,
    error: null,
    login: login,
    logout: logout,
  };

  return (
    <FakeLoginContext.Provider value={contextProvider}>
      {children}
    </FakeLoginContext.Provider>
  );
};

export const useFakeLogin = () => useContext(FakeLoginContext);
