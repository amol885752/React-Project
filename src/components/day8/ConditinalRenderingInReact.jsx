import React, { Component } from 'react';

class ConditinalRenderingInReact extends Component {
   
   //rconst
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn:true 
      }
    }
    
    render() {
        //using if else 
        // if (this.state.isLoggedIn) {
        //     return <div> <h1>Welcome Ramesh</h1> </div>
        // } else {
        //     return <div> <h1>Welcome Guest</h1> </div>
        // }

        //using variable 
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div> <h1>Welcome Ramesh</h1> </div>
        // } else {
        //     message =  <div> <h1>Welcome Guest</h1> </div>
        // }
        // return message


        //conditional/ternary operator
       // return this.state.isLoggedIn ? <div> <h1>Welcome Ramesh</h1> </div> :  <div> <h1>Welcome Guest</h1> </div>

        //short circit 
       return this.state.isLoggedIn && <div> <h1>Welcome Ramesh</h1> </div>
    }
           
}

export default ConditinalRenderingInReact;