import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log('Hiiiiii');
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
                <button onClick={() => this.clickHandler()}>Click2</button>
            </div>
        )
    }
}

export default ClassClick
