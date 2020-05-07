import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("Hiiii");
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            <button onClick={() => clickHandler()}>Click 2</button>
        </div>
    )
}

export default FunctionClick
