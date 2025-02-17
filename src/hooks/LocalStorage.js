import React, { useEffect, useState } from 'react'

const LocalStorage = () => {
    const [subject, setSubject] = useState(
        localStorage.getItem("subject") ? localStorage.getItem("subject") : ''
    );

    useEffect(() => {
        localStorage.setItem("subject", subject)
    }, [subject])

  return (
    <div>
        <label className='form-label'>Enter Subject</label>
        <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)} />
        <p>You entered: {subject}</p>
    </div>
  )
}

export default LocalStorage
