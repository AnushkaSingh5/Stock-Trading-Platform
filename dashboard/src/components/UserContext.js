import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    try {
      setUser(JSON.parse(storedUser));
      setLoading(false);
      return;
    } catch {
      localStorage.removeItem("user");
    }
  }

  const params = new URLSearchParams(window.location.search);
  const userParam = params.get("user");
  if (userParam) {
    try {
      const parsedUser = JSON.parse(decodeURIComponent(userParam));
      setUser(parsedUser);
      localStorage.setItem("user", JSON.stringify(parsedUser));
    } catch (err) {
      console.error("Failed to parse user from URL", err);
    }
  }
  setLoading(false);
}, []);


  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "https://stock-frontend-sage.vercel.app";
  };

  const login = (userData, token) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    setUser(userData); 
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, login, loading  }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);


