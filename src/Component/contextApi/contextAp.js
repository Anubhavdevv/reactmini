import React, { createContext } from 'react'

import ComA from './ComA';
const FirstName = createContext();
const LastName = createContext();
const contextAp = () => {
  return (
     <> 
      <FirstName.Provider value = {"Anubhav"}> 
        <LastName.Provider value={"Gupta"}>
         <ComA />
        </LastName.Provider>
      </FirstName.Provider>
      <div>contextAp</div>
    </>  
  )
}

export default contextAp;
export {FirstName, LastName};