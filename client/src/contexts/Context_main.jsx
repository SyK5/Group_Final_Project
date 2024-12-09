import React, { createContext, useEffect, useReducer } from "react";
import { usersInitialState, usersReducer } from "../reducer/userReducer";

import { useContext } from "react";

export const MainContext = createContext();

const Context_main = ({ children }) => {
  const [usersState, usersDispatch] = useReducer(
    usersReducer,
    usersInitialState
  );


  return (
    <MainContext.Provider
      value={
        [usersState,
        usersDispatch]
      }
    >
      {children}
    </MainContext.Provider>
  );
};

export default Context_main;
