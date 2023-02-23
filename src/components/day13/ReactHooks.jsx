import React, { useState } from 'react'

//1.import useState from react
function ReactHooks() {
    //2. create state in functinal comp using useState hook 
    const [color,setColor] = useState('Red')   

    //update the state 
   const changeColor = ()=>{
    setColor('Green')
   }  
  return (
    <div>
      <h1>React hooks</h1>
      {/* 3. use state */}
      <h3>Color:{color}</h3>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default ReactHooks
