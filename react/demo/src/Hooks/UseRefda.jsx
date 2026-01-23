import React, { useRef } from 'react'
import Header from '../Layout/Coman/Header'

function UseRefda() {

    const refelemet = useRef()

    const getstyle =()=>{
        refelemet.current.focus();
    }
    

    const getdata=()=>{
        refelemet.current.style.background = "red"
    }

  return (
    <div>
      <Header />
      <h1>Hello this Use ref data</h1>

      <input type="text" ref={refelemet} placeholder='Enter your name' name="" id="" />
      <button className='btn btn-success' onClick={getstyle}>Chnage data</button>

      <button onClick={getdata}>Change style</button>
    </div>
  )
}

export default UseRefda
