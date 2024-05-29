import React, { createContext, useState } from "react";

// Create a context
export const UserContext = createContext();

// Create a provider component
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize state to manage user
  const getUser=async()=>{
    try {
        const res=await axios.get(URL+"/api/auth/refetch",{withCredentials:true})
        console.log(res.data)
        
    } catch (error) {
        console.log(err)
        
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
