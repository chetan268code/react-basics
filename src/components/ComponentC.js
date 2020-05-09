import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentC extends Component {
    render() {
        return (
            <div>
                Component C
                <UserConsumer>
                    {
                        (userName) => {
                        return <h1>Hello {userName}</h1>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentC
