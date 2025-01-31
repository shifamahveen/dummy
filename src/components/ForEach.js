import React from 'react'

const ForEach = ({ arr }) => {
    let items = arr.forEach(i => {
        console.log(i*2);
    })
    
  return (
    <div>
      {items.map(i => (
        <li>{i}</li>
      ))}
    </div>
  )
}

export default ForEach
