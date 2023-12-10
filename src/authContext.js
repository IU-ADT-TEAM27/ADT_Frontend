/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

// AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [authUser,setAuthUser] = useState(null);

    useEffect(() => {
        if(token){
            localStorage.setItem('token', token)
        }else{
            localStorage.removeItem('token')
        }
    },[token])

    // Function to set the token
    const setAuthToken = (newToken) => {
        setToken(newToken);
    };

    return (
        <AuthContext.Provider value={{ token, setAuthToken, authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use the context
export function useAuth() {
    return useContext(AuthContext);
}
