import React from 'react'

const Filter = ({ arr }) => {
    const activeUsers = arr.filter(user => user.isActive);

  return (
    <div>
      {activeUsers.map((i) => (
        <h3 key={i.id}>{i.id}. {i.name}</h3>
      ))}
    </div>
  )
}

export default Filter;