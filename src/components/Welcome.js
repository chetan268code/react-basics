import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <div>Hi {this.props.name}</div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default Welcome
