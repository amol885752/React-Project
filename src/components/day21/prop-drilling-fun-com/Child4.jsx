import React, { useContext } from 'react'
import {messageContext} from './Parent'
function Child4() {
    const message = useContext(messageContext)
  return (
    <div>
         <h4>Child 4:{message}</h4>
    </div>
  )
}

export default Child4
