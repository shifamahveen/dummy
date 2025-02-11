import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green')

    useEffect(() => {
        console.log("Component Rendered"); // executes everytime on change
    })

    useEffect(() => {
        console.log("Component Mounted"); // only on mounting
    }, [])

    useEffect(() => {
        console.log("Component Updated count", count); // when count changes

        return() => {
            console.log("cleanup function");
        }
    }, [count])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>+</button>
      <h1>Color: {color}</h1>
      <button onClick={() => setColor("purple")}>Color Change</button>
    </div>
  )
}

export default Effect;