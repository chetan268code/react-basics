import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Welcome visitor'
        }
    }

    // A, B
    clickHandlerES6 = () => {
        this.setState({
            message: 'Hi'
        })
    }

    // C, D
    clickHandlerES5() {
        this.setState({
            message: 'Bye'
        })
    }
    
    render() {
        return (
            <div>
                {this.state.message}

                {/* A - Handler as function declaration */}
                <button onClick={this.clickHandlerES6}>Subscribe A</button>

                {/* B - Handler as function Call */}
                <button onClick={() => this.clickHandlerES6()}>Subscribe B</button>

                {/* C - Handler as function declaration */}
                <button onClick={this.clickHandlerES5.bind(this)}>Subscribe C</button>

                {/* D - Handler as function call */}
                <button onClick={() => this.clickHandlerES5()}>Subscribe D</button>
            </div>
        )
    }
}

export default Message
