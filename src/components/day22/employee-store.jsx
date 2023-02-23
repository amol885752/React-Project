import React, { createContext, useState } from 'react'
import EmployeeMain from './employee-main'

//create context
export const employeeContext = createContext()

const EmployeeStore = () => {

  //employee global state to store the employee data
  const [employee,setEmployee] = useState([])

    //Save employeee to store
    const saveEmployee =(empObj)=>{
        console.log(empObj)
        setEmployee([...employee,empObj])
    }

    //delete employee
    const deleteEmployee =(empObj)=>{
        const newEmployee = employee.filter((t)=>t !==empObj)
        setEmployee(newEmployee)
    }

    //update employee
    const updateEmployee = ()=>{
        //update logic
    }
  return (
    <employeeContext.Provider value={{employee,saveEmployee,deleteEmployee,updateEmployee}}>
        <EmployeeMain/>
    </employeeContext.Provider>
  )
}

export default EmployeeStore

//rafce