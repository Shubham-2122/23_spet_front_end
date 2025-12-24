import React from 'react'

function D({name,setname}) {
  return (
    <div>
      <h1>hello this D component</h1>
      <h2>Hello name : {name}</h2>

      <button onClick={()=>setname("sujal jadav")}>Chnage name</button>
    </div>
  )
}

export default D
