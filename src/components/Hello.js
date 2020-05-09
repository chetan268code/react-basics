import React from 'react'

// JSX version
// const Hello = () => <div id="hello" class="dummyClass"><h1>Hello</h1></div>

// Non JSX Version
const Hello = () => {
    return React.createElement(
        'div', 
        {id: 'Hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello'));
}

export default Hello