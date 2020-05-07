import React from 'react'
import './myStyles.css'

function STylesheet(props) {
    const className = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheet</h1>
        </div>
    )
}

export default STylesheet
