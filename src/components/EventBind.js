import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello World'
        }

        // C
        // this.clickHandlerES5 = this.clickHandlerES5.bind(this);
    }

    clickHandlerES5() {
        this.setState({
            message: 'Hi'
        })
    }

    clickHandlerES6 = () => {
        this.setState({
            message: "Bye"
        })
    }
    
    render() {
        const {message} = this.state
        return (
            <div>
                {message}

                {/* A */}
                {/* <button onClick={this.clickHandlerES5.bind(this)}>Click</button> */}

                {/* B */}
                {/* <button onClick={() => this.clickHandlerES5()}>Click</button> */}

                {/* C */}
                {/* <button onClick={this.clickHandlerES5}>Click</button> */}

                {/* D */}
                <button onClick={this.clickHandlerES6}>Click</button>

                {/* E */}
                <button onClick={() => this.clickHandlerES6()}>Click</button>

            </div>
        )
    }
}

export default EventBind
