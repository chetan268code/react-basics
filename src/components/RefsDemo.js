import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props);

        // 1
        this.inputRef = React.createRef();

        // 2
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount() {
        // 1
        // this.inputRef.current.focus()

        // 2
        if(this.cbRef)
            this.cbRef.focus()
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
    
    render() {
        return (
            <div>
                {/* 1 */}
                {/* <input ref={this.inputRef} /> */}

                {/* 2 */}
                <input type="text" ref={this.setCbRef}></input>

                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
