import React, {createContext, useState} from "react";

export const UserContext = createContext();

const UserContextProvider = props => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(false);

  const connect = user => {
    setEmail(user.email)
    setToken(user.token)
    setAdmin(Boolean(user.admin))
  }

  const logout = () => {
    setEmail("")
    setToken("")
    setAdmin(false)
  }

  return (
    <UserContext.Provider value={{email, token, admin, connect, logout}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;