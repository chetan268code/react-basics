import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Chetan'
        }
        console.log('Lifecycle B constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle B getDerivedStateFromProps')
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Lifecycle B shouldComponentUpdate')
        return true;
    }
    
    render() {
        console.log('Lifecycle B render');
        return (
            <div>
                Lifecycle B
            </div>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle B getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Lifecycle B componentDidUpdate')
    }

    componentDidMount() {
        console.log('Lifecycle B componentDidMount');
    }
}

export default LifecycleB
