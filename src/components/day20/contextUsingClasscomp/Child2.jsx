import React, { Component,createContext } from 'react'
import Child3 from './Child3'
import ParentContextComp from './Parent'
export const MessageContext =createContext()

 class Child2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message:"Welcome to react"
    }
  }
  
  render() {
    return (
      <div>
        <h5>THis is Child 2 comp:</h5>
        <MessageContext.Provider value={this.state.message} >
              {/* <ParentContextComp /> */}
              <Child3 />
        </MessageContext.Provider>
      
      </div>
    )
  }
}

export default Child2
