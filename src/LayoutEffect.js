import React, { useEffect, useLayoutEffect, useState } from 'react'

const LayoutEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Executing useEffect hook");
    }, [count]);

    useLayoutEffect(() => {
        console.log("Executing useLayoutEffect hook");
    }, [count])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>+</button>
    </div>
  )
}

export default LayoutEffect
