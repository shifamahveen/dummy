import React from 'react'
import react from '../react.png'
import '../App.css'

const Img = () => {
    let styles = {
        fontSize: '40px',
        color: 'green',
    };

  return (
    <div>
        <h1 style={styles}>Image</h1>
        <p className='custom'>Hello world</p>
        <img src={react} alt='react logo' style={{ width: '100px', border: '5px yellow solid' }} />
    </div>
  )
}

export default Img
