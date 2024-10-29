import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (token && storedUser) {
            setIsAuthenticated(true);
            setUser(storedUser);
        }
    }, []);

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData.user);  // Make sure this contains all user details
        localStorage.setItem("token", userData.token);
        localStorage.setItem("user", JSON.stringify(userData.user));  // Save user details locally
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setUser(null);
    };
    // updating balance after money transfer in dashboard page
    const updateUser = (updatedUserData) => {
        setUser((prevUser) => ({
            ...prevUser,
            ...updatedUserData,
        }));
        // Update local storage
      
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout,updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
