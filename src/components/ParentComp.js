import React, { Component } from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Chetan'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Chetan'
            })
        }, 2000);
    }
    
    render() {
        console.log('******Parent Comp********');
        return (
            <div>
                Parent Component

                {/* shouldComponetUpdate Always return true by default */}
                <RegularComp name={this.state.name}></RegularComp>

                {/* Implements shallow comparion on props and state */}
                <PureComp name={this.state.name}></PureComp>

                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
