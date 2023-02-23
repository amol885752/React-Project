import React, { useContext } from 'react'

import { employeeContext } from './employee-store'
const EmployeeList = () => {

    const { employee,deleteEmployee } = useContext(employeeContext)
    console.log(employee)
    return (
        <div>
            <div className='formHeading'>
                <h5>EMPLOYEE LIST</h5>
            </div>
            <div className='mrg25'>
                {employee.length > 0 ?   <table>
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>Employee Name</th>
                            <th>Company Name</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.length > 0 && employee.map((emp,index) => {
                            return (
                                <tr key={index}>
                                    <td>{emp.empId}</td>
                                    <td>{emp.empName}</td>
                                    <td>{emp.empComapnay}</td>
                                    <td><button onClick={()=>deleteEmployee(emp)}>Delete</button><button >Update</button></td>
                                </tr>
                            )
                        })}
                    </tbody>


                </table>: <h6>No employee data available.....</h6>}
              
            </div>
        </div>


    )
}

export default EmployeeList
