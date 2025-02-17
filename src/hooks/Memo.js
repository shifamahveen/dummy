import React, { useState, useMemo } from 'react'

const Memo = () => {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    const calcCube = (num) => {
        console.log("calculating..");
        return Math.pow(num, 3)
    }
    // const result = calcCube(num);
    const result = useMemo(() => {
        return calcCube(num)
    }, [num])

  return (
    <div>
        <span>Count: {count}</span>
        <button onClick={() => setCount(count+1)}>+</button>

        <br />
        <input type='number' value={num} onChange={(e) => setNum(e.target.value)} />
        <h1>Number: {num}</h1>
        <h1>Cube: {result}</h1>
    </div>
  )
}

export default Memo
