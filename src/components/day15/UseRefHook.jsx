import React, { useEffect, useRef } from 'react'

function UseRefHook() {

    const inputRef =useRef()

    // const focusTextBox =()=>{
    //     inputRef.current.focus()
    // }
    
    //in class comp we did it in componentDidMount 
    useEffect(()=>{
        inputRef.current.focus()
    })

  return (
    <div style={{marginLeft:"430px"}}>
      <h1>Useref hook</h1>
     User Name  : <input type="text" name="" id=""  ref={inputRef}/><br/><br/>
     {/* <button onClick={focusTextBox}>Focus TextBox</button> */}
    </div>
  )
}

export default UseRefHook
