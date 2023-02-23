import React, { useState } from 'react'
import './employee.css'

import AddNewButton from './add-new-button'
import AddNewEmployee from './add-new-employee'
import EmployeeList from './employee-list'
const EmployeeMain = () => {

    //create a state to show or hide the comp
    const [showAddEmployee,setShowAddEmplyee] = useState(false)


    //pass data from child comp to the parent 
    const showHideEmployeeAddComp = (value)=>{
        setShowAddEmplyee(value)
    }

    return (
        <div>
            <div className='nav'>
                <h4>EMPLOYEE MANAGEMENT (GLOBAL STATE)</h4>
            </div>
            <div><AddNewButton showHideEmployeeAddComp={showHideEmployeeAddComp} /></div>
            {showAddEmployee ?  <div><AddNewEmployee   showHideEmployeeAddComp={showHideEmployeeAddComp}/></div>: <EmployeeList/>}
           
        </div>
    )
}

export default EmployeeMain