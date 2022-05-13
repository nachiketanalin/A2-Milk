import { createContext, useState, useEffect } from "react";


const UserContext = createContext();

export default UserContext;

export const UserProvider = ({ children }) => {

  let [token, setToken] = useState("");
  let contextData = {
    token: token,
    setToken: setToken
  };

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  );
};