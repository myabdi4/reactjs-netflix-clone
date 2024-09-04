import React, { createContext, useState, useContext } from "react";

// Create a context for the user data
const UserContext = createContext(null);

// Create a custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
