import React, { useState } from 'react'

const Form = () => {
  const [branch, setBranch] = useState("CSE");

  return (
    <div>
      <label>Branch</label>
      <select value={branch} className='form-select'
      onChange={(event) => setBranch(event.target.value)}>
        <option>CSE</option>
        <option>ECE</option>
        <option>EEE</option>
      </select>

      <h3>You selected: {branch}</h3>
    </div>
  )
}

export default Form
