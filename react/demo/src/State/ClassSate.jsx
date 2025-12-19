// Class this.State defined
// class State as object
// class State change setState Function State update
// Conto

import React, { Component } from 'react'
import ImageData from './ImageData';

class ClassSate extends Component {
    constructor() {
        super();
        this.state = {
            name: "het patel",
            count: 0,
            isImage: true
        }
    }
    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>Hello Name : {this.state.name}</h1>
                <button onClick={() => this.setState({ name: "shubham jadav" })}>Change Name</button>
                <button onClick={() => this.setState({ name: "prath" })}>Change Name 2</button>

                <h1>Hello Count : {this.state.count}</h1>
                <button onClick={()=>this.setState({count : this.state.count + 1})}>Increment</button>
                <button onClick={()=>this.setState({count : this.state.count - 1})}>Decrement</button>
                <button onClick={()=>this.setState({count : 0})}>Zero</button>
                <br /> <br />

                 <button onClick={()=>this.setState({isImage : false})}>Hide</button>
                 <button onClick={()=>this.setState({isImage : true})}>Show</button>
                 <button onClick={()=>this.setState({isImage : !this.state.isImage})}>toggle</button>

                {(this.state.isImage)? <ImageData /> : false}
            </div>
        )
    }
}

export default ClassSate
