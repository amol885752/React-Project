import React,{useReducer} from 'react'
import { useState } from 'react';

const UseReducerHook = () => {
    
    const reducer =(count,action)=>{
        switch (action) {
            case 'add':
                return  count +1
                break;
            case 'sub':
                return count -1;
                break;
            case 'reset':
                return 0;
                break;    
            default:
                break;
        }
    }
    //const [state,dispatch] =  useReducer(reducer,init)

    const[count,dispatch] = useReducer(reducer,0)

  return (
    <div>
      {count}
      <div>
      <button onClick={()=>dispatch('add')}>ADD</button> 
      <button onClick={()=>dispatch('sub')}>SUBSTRACT</button>
      <button onClick={()=>dispatch('reset')}>RESET</button>
      </div>
     
    </div>
    
  )
}

export default UseReducerHook
