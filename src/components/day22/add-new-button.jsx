import React from 'react'

const AddNewButton = (props) => {
  return (
    <div className='addNewBtn'>
        <button onClick={()=>props.showHideEmployeeAddComp(true)}>ADD NEW EMPLOYEE</button>
    </div>
  )
}

export default AddNewButton