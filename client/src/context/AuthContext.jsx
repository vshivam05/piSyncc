import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("pisync-auth") === "true";
  });
  const [isLoading, setIsLoading] = useState(false);
  const login = (username, password) => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("pisync-auth", "true");
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("pisync-auth");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, setIsLoading, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
