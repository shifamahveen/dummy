import React, { useState, useCallback } from 'react';
import Task from './Task';
// useCallback -> caches a function to avoid creating its instance on re-renders

const Callback = () => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    // const addTodo = () => {
    //     setTodo(t => [...t, "New Task"])
    // }
    const addTodo = useCallback(() => {
        setTodo(t => [...t, "New Task"])
    }, [todo])

  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={() => setCount(count+1)}>+</button>

      <br />
      <Task todo={todo} addTodo={addTodo} />
    </div>
  )
}

export default Callback
