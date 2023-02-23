import React from "react"
const  JsxComponent =()=>{
    //using jsx code syntax
    let a=25,b=20;
    return(
        <div>
            <h1>Hello, My name is Ramesh</h1>
            {/* using expression */}
            <h2>Addition of two number :{a+b}</h2>
            {/* ternary operator  */}
            <h3> { a>40 ? "A is gretter than 40 ": "A is less than 40" } </h3>
        </div>
    )

//without using jsx
// React.createElement('string name of element',property,value in string )

//    return  React.createElement('div',null,React.createElement('h1',null,'Hello, My name is Ramesh'))
}
export default JsxComponent