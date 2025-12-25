import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildD() {
  
    const {name,setname} = useContext(data)

    return (
    <div>
      <h1>Hello this Child D Component</h1>
      <h1>Hello :  {name}</h1>
      <button onClick={()=>setname("het patel")}>Change name</button>
   
    </div>
  )
}

export default ChildD
