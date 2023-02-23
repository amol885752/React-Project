import React, { Component,createContext } from 'react'
import Child1 from './Child1'
import { MessageContext } from './Child2'
//create context 
//export const MessageContext =React.createContext()
// export const MessageContext =createContext()

 class ParentContextComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Welcome to react"
      }
    }
    
  render() {
    return (
      <div>
        <h5>This is parent  of context comps </h5>
        <MessageContext.Consumer>
            {value=><h1>{value}</h1>}
        </MessageContext.Consumer>
       <Child1/>
      </div>
    )
  }
}

export default ParentContextComp
