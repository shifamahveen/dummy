import React from 'react'

const Conditionals = (props) => {
  if(props.isLogged) {
    return <h3>You are logged in 
            <button onClick={props.Logout}>Logout</button>
            </h3>
  } else {
    return <h3>You are logged out 
            <button onClick={props.Login}>Login</button>
            </h3>
  }
}

export default Conditionals;