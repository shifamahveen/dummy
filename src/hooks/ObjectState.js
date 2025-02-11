import React, { useState } from 'react'

const ObjectState = () => {
    const [car, setCar] = useState({
        brand: "BMW",
        color: 'black',
        model: "EF"
    });

    const updateDetails = () => {
        setCar((prev) => {
          return {...prev, color: "red"}
        })
    }

  return (
    <div>
      <h1>Car brand: {car.brand}</h1>
      <h1>Car color: {car.color}</h1>
      <h1>Car model: {car.model}</h1>
      <button onClick={updateDetails}>Change color</button>
    </div>
  )
}

export default ObjectState
