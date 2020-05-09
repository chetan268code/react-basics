import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class ClickCounterHOC extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times by {this.props.name}</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounterHOC, 5)
