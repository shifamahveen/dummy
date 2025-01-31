import React from 'react'

const Switch = (props) => {
    const isLogged = props.isLogged;
    const isAdmin = props.isAdmin;

  switch(true) {
    case isLogged && isAdmin:
        return <h4>Welcome Admin!</h4>
    case isLogged && !isAdmin:
        return <h4>Welcome User!</h4>
    case !isLogged:
        return <h4>Please Login</h4>
  }
}

export default Switch
