import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Chetan'
        }
        console.log('Lifecycle A constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getDerivedStateFromProps')
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Lifecycle A shouldComponentUpdate')
        return true;
    }
    
    render() {
        console.log('Lifecycle A render');
        return (
            <div>
                Lifecycle A {this.state.name}
                <LifecycleB></LifecycleB>
                <button onClick={() => this.setState({name: 'Bansal'})}>Change State</button>
            </div>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle A getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Lifecycle A componentDidUpdate')
    }

    componentDidMount() {
        console.log('Lifecycle A componentDidMount');
    }
}

export default LifecycleA
