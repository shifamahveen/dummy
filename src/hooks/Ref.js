import React, { useRef, useState } from 'react'

const Ref = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const updateRef = () => {
        countRef.current += 1;
    }

    return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count+1)}>+</button>

        <h1>Ref variable Count: {countRef.current}</h1>
        <button onClick={updateRef}>Update ref</button>
        </div>
    )
}

export default Ref
