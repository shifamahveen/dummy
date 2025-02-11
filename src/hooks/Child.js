import React, { useContext } from 'react'
import { Context } from '../App';

const Child = () => {
    const login = useContext(Context);
    console.log(login);
    
    return (
        <div>
            <h1>Child</h1>
        </div>
    )
}

export default Child;