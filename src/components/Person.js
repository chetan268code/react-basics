import React from 'react'

function Person(props) {
    const {name, age} = props.person;
    return (
        <div>
            <h1>This is {name}. My age is {age}</h1>
        </div>
    )
}

export default Person
