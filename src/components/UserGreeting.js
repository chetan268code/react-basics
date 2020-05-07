import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        // A
        // const {isLoggedIn} = this.state;
        // let message;
        // if(isLoggedIn) message = <div>Hi User</div>;
        // else message = <div>Hi Guest</div>;
        // return (
        //     <div>{message}</div>
        // )

        // B
        // return (
        //     this.state.isLoggedIn ? <div>hi User</div> : <div>Hi Guset</div>
        // )

        // C (Short circuit approach - Something or nothing approach)
        return this.state.isLoggedIn && <div>Hi User</div>
    }
}

export default UserGreeting
