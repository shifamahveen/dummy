import useLocalStorage from './useLocalStorage'
import React from 'react'

const Comp = () => {
    const [name, setName] = useLocalStorage("username", "alex");

  return (
    <div>
      <h1>Name: {name}</h1>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default Comp
