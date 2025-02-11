import React, { useRef } from 'react'

const DOM = () => {
    const inputRef = useRef();

    const update = () => {
        inputRef.current.style.padding = "10px";
        inputRef.current.value = "use ref hook";
        inputRef.current.focus();
    }

  return (
    <div>
      <input ref={inputRef} type='text' placeholder='Enter Text' />
      <button onClick={update}>Update</button>
    </div>
  )
}

export default DOM
