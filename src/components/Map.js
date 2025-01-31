import React from 'react'

const Map = (props) => {
    const mails = props.mails;
    const person = props.person;

    return (
        <>
            <div>
                {mails.map((i, index) => (
                    <li key={index}>{index+1}. {i}</li>
                ))}
            </div>

            <ol>
                {Object.entries(person).map(([key, value], index) => (
                    <li key={index}>{key}: {value}</li>
                ))}
            </ol>
        </>
    )
}

export default Map
