import React, { createContext } from "react";

// Define the default user object
export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
}

// Define the default logOut function
export const defaultLogOut = () => { };

// Create the React context containing the user object and logOut function
const AppContext = createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default AppContext;