import { useEffect, useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(
        localStorage.getItem(key) ? localStorage.getItem(key) : initialValue
    )

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [key, value])

  return [value, setValue];
}

export default useLocalStorage
