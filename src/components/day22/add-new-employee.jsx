import React, { useContext, useState } from 'react'


import {employeeContext} from './employee-store';

const AddNewEmployee = (props) => {

    const [empId,setEmpId] =useState(0)
    const [empName,setEmpName]= useState('')
    const [empComapnay,setEmpComapnay]=useState('')
    
    //use context
    const empContext = useContext(employeeContext)
    console.log(empContext)

    //save employee details in store
    const saveEmployeeToStore =(e)=>{
       const empObj ={
        empId:empId,
        empName:empName,
        empComapnay:empComapnay

       }
       empContext.saveEmployee(empObj)
       props.showHideEmployeeAddComp(false)
    //    alert(JSON.stringify(empObj))
       e.preventDefault()
    }   
    return (
        <div>
            <div className='formHeading'>
                <h5>ADD NEW EMPLOYEE</h5>
            </div>
            <form onSubmit={saveEmployeeToStore}>
                <div className='addNewemp'>
                    <div>
                        <div>EmployeeId: <input type="number"  value={empId} onChange={(e)=>setEmpId(e.target.value)}/></div>
                    </div>
                    <div>
                        <div>Employee Name: <input type="text" value={empName}  onChange={(e)=>setEmpName(e.target.value)}/> </div>
                    </div>
                    <div>
                        <div>Company Name: <input type="text" value={empComapnay} onChange={(e)=>setEmpComapnay(e.target.value)} /> </div>
                    </div>
                </div>
                <div className='subBtn'><button type="submit">SUBMIT</button></div>

            </form>
        </div>
    )
}

export default AddNewEmployee
