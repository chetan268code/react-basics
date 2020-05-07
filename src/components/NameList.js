import React from 'react'

function NameList() {
    const names = ['Chetan', 'Aman', 'Akshay'];
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
