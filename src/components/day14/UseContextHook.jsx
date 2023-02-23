import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()
function Component1() {
    const [user,setUser] =useState("John An")
  return (
    <div>
      <h1>{`Hello ${user}`}</h1>
      <UserContext.Provider value={user}>
             <Component2 />
      </UserContext.Provider>
    </div>
  )
}

function Component2(){
    const user = useContext(UserContext)
    return(
        <>
        <h1>Component 2</h1>
        <h1>{`Hello ${user} again in comp 2`}</h1>
        <Component3 />
        </>
    )
}

function Component3(){
    const user = useContext(UserContext)
    return(
        <>
        <h1>Component 3</h1>
        <h1>{`Hello ${user} again in comp 3`}</h1>
        <Component4/>
        </>
    )
}


function Component4(){
    const user = useContext(UserContext)
    return(
        <>
        <h1>Component 4</h1>
        <h1>{`Hello ${user} again in comp 4`}</h1>
        </>
    )
}

export default Component1
