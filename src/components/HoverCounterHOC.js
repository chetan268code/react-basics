import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class HoverCounterHOC extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hovered {count} times by {this.props.name}</h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounterHOC, 10)
