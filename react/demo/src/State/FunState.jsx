// state : Hooks 
// Hooks : logic /inbuilt functiolty
// react v16.8 : function intro hoks
// useState : Stata a vraible defied and use 
// const [state,setstate] = useState()

import React, { useState } from 'react'
import ImageData from './ImageData'

function FunState() {
    // type defined,setdefind = useState(value)
    const [name,setname] = useState("het patel")
    const [count,setcount]= useState(0)
    const [isImage,setisImage] = useState(true)

    const increment = ()=>{
        setcount(count + 2)
    }

  return (
    <div>
      <h1>hello name : {name}</h1>
      <button onClick={()=>setname("varj patel")}>Chnage name</button>
      <button onClick={()=>setname("parth")}>Chnage name2</button>

      <h1>Hello count : {count}</h1>
      <button onClick={()=>setcount(count + 1)}>Increment</button>
      <button onClick={increment}>Increment 2</button>
      <button onClick={()=>setcount(count - 1)}>Decrement</button>
      <button onClick={()=>setcount(0)}>Zero</button>
        <br /> <br />

        <button onClick={()=>setisImage(false)}>Hide</button>
        <button onClick={()=>setisImage(true)}>Show</button>
        <button onClick={()=>setisImage(!isImage)}>Toggle</button>
        {
            (isImage)?<ImageData /> : false
        }

    </div>
  )
}

export default FunState
