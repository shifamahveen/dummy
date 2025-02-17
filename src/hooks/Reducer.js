import React, { useReducer } from 'react'

const reducer = (count, action) => {
    switch(action.opr) {
        case 'increment':
            return count + 1;
        case 'decrement':
            return count - 1;
        case 'reset':
            return 0;
        default: 
            return count
    }
}

const Reducer = () => {
    const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick={() => dispatch({ opr: 'decrement' })}>-</button>
        <button type="button" className="btn btn-primary"
        onClick={() => dispatch({ opr: 'reset' })}>Reset</button>
        <button type="button" className="btn btn-primary"
        onClick={() => dispatch({ opr: 'increment' })}>+</button>
    </div>
    </div>
  )
}

export default Reducer
