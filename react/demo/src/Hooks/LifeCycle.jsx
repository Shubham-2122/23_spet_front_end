import React, { Component } from 'react'
import Header from '../Layout/Coman/Header'

class LifeCycle extends Component {

    constructor(){
        super();
        this.state = {
            name : "Het patel"
        }
    }
  
    // mouting phase
    componentDidMount(){
        console.log("Mouting phase.")
    }

    // shouldComponentUpdate(){
    //     console.log("data checked")
    // }

    // update phase
    componentDidUpdate(){
        console.log("Update phase runing.")
    }

    componentWillUnmount(){
        console.log("Unmouting data")
    }

    render() {
    return (
      <div>
        <Header />
        {/* <h1>Hello this React Life cycle</h1>

        1) mouting state :  initial data 
        2) updated state : change state/props 
        3) unmouting state : null data remove */}

        <h1>Hello name : {this.state.name}</h1>
        <button onClick={()=>this.setState({name : "Shubham jadav"})}>Chnage name</button>

      </div>
    )
  }
}

export default LifeCycle
