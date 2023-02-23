import React, { Component } from 'react'

//import context created in parent comp 
//import { MessageContext } from './Parent'
import Child4 from './Child4'
 class Child3 extends Component {
  render() {
    return (
      <div>
        <h5>This is child 3 comp </h5>
        {/* <MessageContext.Consumer>
            {value=><h1>{value}</h1>}
        </MessageContext.Consumer> */}
        <Child4/>
      </div>
      
    )
  }
}

export default Child3
