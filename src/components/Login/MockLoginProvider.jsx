import { createContext, useContext, useState } from 'react';

const MockLoginContext = createContext();

export const MockLoginProvider = ({ children }) => {
    const [userId, setUserId] = useState('');

    const mockLoginFunction = (email, password) => {
        if (email === 'test@test.se' && password === 'testpassword') {
            const mockUserId = 'mock-uuid-12345';
            setUserId(mockUserId);
            console.log('Mock login successful, User ID:', mockUserId);
        } else {
            console.error('Mock login failed: Invalid email or password');
        }
    };

    return (
        <MockLoginContext.Provider value={{ userId, loginFunction: mockLoginFunction }}>
            {children}
        </MockLoginContext.Provider>
    );
};

export const useMockLogin = () => {
    return useContext(MockLoginContext);
};