import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {
        // Do not directly mutate this.state, does not re-render
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);

        // React binds multiple setState calls in to a single render for better performance
        // therefore always use prevState to consume previous state
        // Calls to setState are async
        // Therefore we may need a callback if we need to main the order of execution
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () => {
            // This is callback after state is mutated
            console.log(this.state.count);
        })
    }
    
    render() {
        return (
            <div>
                Count: {this.state.count}
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter

