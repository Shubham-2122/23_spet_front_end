import React, { useState } from 'react'
import ImageData from './ImageData'

function FunObj() {

    const [data,setdata] = useState({
        name : "shubham jadav",
        count : 0,
        isImage : true
    })

  return (
    <div>
      <h1> hello name : {data.name}</h1>
      <button onClick={()=>setdata({...data,name : "sujal"})}>Change Name</button>
      <button onClick={()=>setdata({...data,name : "hello"})}>Change Name 2</button>

      <h1>Hello count : {data.count}</h1>
      <button onClick={()=>setdata({...data,count : data.count + 1 })}>increment</button>
      <button onClick={()=>setdata({...data,count : data.count - 1 })}>Decrement</button>
      <button onClick={()=>setdata({...data,count : 0})}> Zero</button>

      {
        (data.isImage ) ? <ImageData /> : false
      }
    </div>
  )
}

export default FunObj
