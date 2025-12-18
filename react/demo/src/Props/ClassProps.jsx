// props : it is a properties 
// props : one compoenent to another compoenent
// props read only : we can not a change data
// props : another compoenent use
// class and function 
// class constu super

import React, { Component } from 'react'

class ClassProps extends Component {
    constructor(props){
        super(props);
        this.data = props
    }
    render() {    
        return (
            <div className='col-md-4'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.data.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.data.title}</h5>
                        <p className="card-text">{this.data.desc}</p>
                        <button className='btn btn-info'>Buy now</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default ClassProps
