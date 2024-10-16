import React, { createContext, useEffect, useReducer } from "react";
import { useContext } from 'react'

export const MainContext = createContext();


const Context_main = ({ children }) => {
  return (
    <MainContext.Provider
      value={{
        
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

export default Context_main