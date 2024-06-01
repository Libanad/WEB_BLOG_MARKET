import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {URL} from "../url";

// Create a context
export const UserContext = createContext();

// Create a provider component
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize state to manage user

  useEffect(()=>{
    getUser()
  },[])

  const getUser=async()=>{
    try {
        const res=await axios.get(URL+"/api/auth/refetch",{withCredentials:true})
        // console.log(res.data)
        setUser(res.data)
        
    } catch (error) {
        console.log(error)
        
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
