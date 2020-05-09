import React from 'react'

function NameList() {
    const names = ['Chetan', 'Aman', 'Akshay'];

    // Note: map returns new array withiut mutating the original array
    const namesList = names.map(name => <h1>{name}</h1>);
    
    return (
        <div>
            <ul>
                {/* {names.map(name => <h1>{name}</h1>)} */}
                {namesList}
            </ul>
        </div>
    )
}

export default NameList
