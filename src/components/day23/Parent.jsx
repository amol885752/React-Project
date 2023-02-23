import React,{useState} from 'react'
import Child from './Child'
const Parent = () => {
    const [count, setCount] = useState(0);

    setInterval(() => {
        setCount(count+1)
    }, 2000);

  return (
    <div>
        {count}
      <h3>This is Parent comp</h3>
      <Child/>
    </div>
  )
}

export default Parent
