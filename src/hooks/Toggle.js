import React, { useState } from 'react'

const Toggle = () => {
    const [darkmode, setDarkMode] = useState(false)

  return (
    <div>
        <div className={`p-4 fs-1 ${darkmode ? "bg-dark text-white" : "bg-white text-black"}`}>
            Hello World
        </div>
        <button onClick={() => setDarkMode(!darkmode)}>
            {darkmode ? "Light" : "Dark"}
        </button>
    </div>
  )
}

export default Toggle

