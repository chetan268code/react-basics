import React from 'react'

// function Greet(props) {
//     return (
//         <div>
//             Hello {props.name}
//         </div>
//     )
// }

const Greet = (props) => {
    return (
        <div>
            <div>Hello {props.name}</div>
            <div>{props.children}</div>
        </div>
    )
}

export default Greet