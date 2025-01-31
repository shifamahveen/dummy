import React from 'react'

const Ternary = (props) => {
  return (
    <>
    <h1>Ternary Operator</h1>
    <div>
      {props.isLogged ? "Logged in" : "Logged out"}
    </div>
    </>
    
  )
}

export default Ternary
