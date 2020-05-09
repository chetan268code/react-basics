import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './userContext'

class ComponentB extends Component {
    render() {
        return (
            <div>
                Component B<br/>
                Component B Context: {this.context}
                <ComponentC></ComponentC>
            </div>
        )
    }
}

ComponentB.contextType = UserContext

export default ComponentB
