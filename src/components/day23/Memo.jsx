import React,{useState} from 'react'

const Memo = (props) => {
    console.log("I am from memo coponent")
    
  return (
    <div>
      <h5>Memo for functional comp..</h5>
      {props.name}
    </div>
  )
}

export default React.memo(Memo)
