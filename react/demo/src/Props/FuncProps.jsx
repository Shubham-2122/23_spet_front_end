// props : it is a properties 
// props : one compoenent to another compoenent
// props read only : we can not a change data

import React from 'react'

function FuncProps({title,img,desc}) {
    return (
        <div className="col-md-4">
    
              <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        
        </div>
    )
}

export default FuncProps
