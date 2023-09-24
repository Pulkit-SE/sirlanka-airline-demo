// AuthContext.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // Implement your login logic here (e.g., Firebase authentication)
    // Set the user state if login is successful
    setLoggedIn(true);
  };

  const logout = () => {
    // Implement your logout logic here (e.g., Firebase signout)
    // Clear the user state on logout
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
