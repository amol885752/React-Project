import React from 'react'

function ChildComp(props) {
  return (
    <div>
      <h1>Child Comp</h1>
      <button onClick={()=>props.parentFunction("Welcome Parent Comp")}>Pass Data to Parent Comp</button>
    </div>
  )
}

export default ChildComp
