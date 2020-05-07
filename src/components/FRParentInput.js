import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
    }
    
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={() => this.inputRef.current.focus()}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
