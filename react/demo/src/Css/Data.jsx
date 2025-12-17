import React from 'react'
import "./style.css"

function Data() {

    let internalcss = {
        background : 'blue',
        color : "white",
        padding:"30px"
    }

  return (
    <div>
      {/* 1) inline css 
      2) internal css not use 
      3) external css */}

      <h1 style={{background:"red",color:"white"}}>Hello this Inline css</h1>

      <h2 style={internalcss}>Hello this internal css</h2>

      <h2>sdfjhbklihil</h2>
        
        <h3 id='h3'>hello this external css</h3>


    </div>
  )
}

export default Data
