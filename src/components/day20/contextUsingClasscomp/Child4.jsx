import React, { Component } from 'react'
import { MessageContext } from './Child2'
 class Child4 extends Component {
  render() {
    return (
      <div>
        <h5>child comp 4</h5>
         <MessageContext.Consumer>
            {value=><h1>{value}</h1>}
        </MessageContext.Consumer>
      </div>
    )
  }
}

export default Child4
