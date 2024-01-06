import React, { createContext } from 'react'
import Context from './Context';
export const myContext = createContext()
const initialState = 0;

const App = () => {
  return (
      <>
        <myContext.Provider value={initialState}>
          <Context/>
        </myContext.Provider>
      </>
  )
}

export default App