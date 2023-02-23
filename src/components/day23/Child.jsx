import React from 'react'

const Child = () => {
    console.log("I am child")
  return (
    <div>
      <h4>This is Child comp</h4>
    </div>
  )
}

export default React.memo(Child)
