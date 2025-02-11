import React, { useEffect, useRef, useState } from 'react'

const Prev = () => {
    const [count, setCount] = useState(0);
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Prev State: {prevCount.current}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Prev
