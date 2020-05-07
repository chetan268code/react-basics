import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             comments: '',
             topic: 'react'
        }
    }

    handleUsernameChange = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    handleCommentsChange = (e) => {
        this.setState({
            comments: e.target.value,
        })
    }

    handleSelectChange = (e) => {
        this.setState({
            topic: e.target.value,
        })
    }

    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
    }
    
    render() {
        let {name, comments, topic} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={name} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleSelectChange}>
                        <option value="vue">Vue</option>
                        <option value="react">React</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form
