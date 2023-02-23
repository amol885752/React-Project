import React, { Component } from 'react'
import Child2 from './Child2'
 class Child1 extends Component {
  render() {
    return (
      <div>
        <h5>This is child 1 Comp </h5>
        <Child2 />
      </div>
    )
  }
}

export default Child1
