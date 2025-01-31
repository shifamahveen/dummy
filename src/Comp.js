import React from 'react'

const Comp = (props) => {

    Object.entries(props).map(([key, value]) => {
        return <h1 index={key}>{key}: {value.toString()}</h1>
    })

}

export default Comp
