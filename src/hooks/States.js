import React, { useState } from 'react'

const States = () => {
    const [count, setNumber] = useState(0);

    const updateCount = () => {
        setNumber(count => count + 1) // 0+1 => 1
        setNumber(count => count + 1) // 1+1 => 2
        setNumber(count => count + 1) // 2+1 => 3
    }
    // const updateCount = () => {
    //     setNumber(count + 1) // 0+1 => 1
    //     setNumber(count + 1) // 0+1 => 1
    //     setNumber(count + 1) // 0+1 => 1
    // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={updateCount}>+</button>
    </div>
  )
}

export default States
