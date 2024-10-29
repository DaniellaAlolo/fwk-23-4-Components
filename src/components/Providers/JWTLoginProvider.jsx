import React, { createContext, useContext, useState } from 'react';
import { login, logout, secureCall } from './authService.js';  

export const JWTLoginContext = createContext();

export const JWTLoginProvider = ({ children, config }) => { 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (username, password) => {
        setLoading(true);
        try {
            const result = await login(config, username, password);  
            setIsLoggedIn(result.isLoggedIn);
            setError(null);
        } catch (e) {
            setIsLoggedIn(false);
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await logout(config);  
            setIsLoggedIn(false);
        } catch (e) {
            console.error("Logout failed:", e);
        }
    };

    const handleSecureCall = async (url, options) => {
        return secureCall(config, url, options);  
    };

    const contextValue = {
        isLoggedIn,
        loading,
        error,
        login: handleLogin,
        logout: handleLogout,
        secureCall: handleSecureCall
    };

    return (
        <JWTLoginContext.Provider value={contextValue}>
            {children}
        </JWTLoginContext.Provider>
    );
};

export const useJWTLogin = () => useContext(JWTLoginContext);