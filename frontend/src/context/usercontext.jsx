import React, { createContext, useState } from "react";

// Create a context
export const UserContext = createContext();

// Create a provider component
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize state to manage user

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
