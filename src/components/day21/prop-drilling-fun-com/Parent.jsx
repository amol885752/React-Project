import React,{createContext, useState} from 'react'
import Child1 from './Child1'

export const messageContext = createContext()

function Parent() {
    const [message,setMessage]= useState("Welcome")
  return (
    <div>
          <h4>THis is Parent Comp...</h4>
          <messageContext.Provider value={message}>
              <Child1/>
          </messageContext.Provider>
      
    </div>
  )
}

export default Parent
