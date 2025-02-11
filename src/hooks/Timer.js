import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        let id;
        if(active && !pause) {
            id = setInterval(() => {
                setTime(time => time+1)
            }, 1000);
        } else {
            clearInterval(id);
        }

        return () => clearInterval(id);
    }, [active, pause])

    const startTimer = () => {
        setActive(true);
        setPause(false);
    }

    const stopTimer = () => {
        setActive(false);
    }

    const resetTimer = () => {
        setActive(false);
        setPause(false);
        setTime(0);
    }

  return (
    <div>
      <h1>Timer: {time}</h1>

      {!active && !pause ? 
        <button onClick={startTimer}>Start Timer</button>  
        :
        <button onClick={stopTimer}>Stop Timer</button>
        }

        <button onClick={resetTimer}>Reset Timer</button>
    </div>
  )
}

export default Timer
