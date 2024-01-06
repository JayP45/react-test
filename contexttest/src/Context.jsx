import React, { useContext } from 'react'
import { myContext } from './App'
const number = useContext(myContext)
const Context = () => {
  return (
    <>
        {number}
    </>
  )
}

export default Context