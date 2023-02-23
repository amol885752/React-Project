
//class based syntax
// import React from "react";

// class HelloComponet extends React.Component{
//     render(){
//         return(
//             <h1>Hello world !!</h1>
//         )
//     }
// }
// export default HelloComponet

//---------------------------------------------
// import React,{Component} from "react";

// class HelloComponet extends Component{
//     render(){
//         return(
//             //Should Return only one JSX Element
//             <div>
//                  <h1>Hello world !!</h1>
//                  <h1>Hello Class Component !!</h1>
                
//             </div>
                
          
           

//         )
//     }
// }
// export default HelloComponet


//-------------------------------------React.Fragment

// import React,{Component} from "react";

// class HelloComponet extends Component{
//     render(){
//         return(
//             //Should Return only one JSX Element
//             <React.Fragment>
//                  <h1>Hello world !!</h1>
//                  <h1>Hello Class Component !!</h1>
                
//             </React.Fragment>
                
          
           

//         )
//     }
// }
// export default HelloComponet

//---------------------------------------------
// import React,{Component,Fragment} from "react";

// class HelloComponet extends Component{
//     render(){
//         return(
//             //Should Return only one JSX Element
//             <Fragment>
//                  <h1>Hello world !!</h1>
//                  <h1>Hello Class Component !!</h1>
                
//             </Fragment>
                
//         )
//     }
// }
// export default HelloComponet

//-----------------------------------------------------
// import React,{Component} from "react";

// class HelloComponet extends Component{
//     render(){
        // return(
        //     //Should Return only one JSX Element
        //     <>
        //          <h1>Hello world !!</h1>
        //          <h1>Hello Class Component !!</h1>
                
        //     </>
                
//         )
//     }
// }
// export default HelloComponet


//---------------------- Function syntax

//function declation syntax

// function HelloComponet(){
//     return(
//         //Should Return only one JSX Element
//         <>
//              <h1>Hello world !!</h1>
//              <h1>Hello Function Declation syntax !!</h1>
            
//         </>
//         )
// }
// export default HelloComponet

//-----------function expression syntax

//  const HelloComponet = function(){
//     return(
//         //Should Return only one JSX Element
//         <>
//              <h1>Hello world !!</h1>
//              <h1>Hello Function expression syntax !!</h1>
            
//         </>
//         )
// }
// export default HelloComponet


//--------------multiline arrow syntax 

// const HelloComponet = ()=> {
//     return(
//         //Should Return only one JSX Element
//         <>
//              <h1>Hello world !!</h1>
//              <h1>Hello Function multiline arrow syntax  !!</h1>
            
//         </>
//         )
// }
// export default HelloComponet


//----------------singlelline arrow syntax 
const HelloComponet = ()=>(
        //Should Return only one JSX Element
        <>
             <h1>Hello world !!</h1>
             <h1>Hello Function singlelline arrow syntax  !!</h1>
            
        </>
        )

export default HelloComponet



