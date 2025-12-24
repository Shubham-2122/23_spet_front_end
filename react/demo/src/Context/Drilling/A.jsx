import React, { useState } from 'react'
import B from './B'

function A() {

    const [name,setname] = useState("shubham jadav")

  return (
    <div>
      <h1>hello this A component</h1>
      <h2>Hello {name}</h2>
      <B name={name} setname={setname} />
    </div>
  )
}

export default A
