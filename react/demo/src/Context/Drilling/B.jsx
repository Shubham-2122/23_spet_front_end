import React from 'react'
import C from './C'

function B({name,setname}) {
  return (
    <div>
      <h1>hello this B component</h1>
      <h2>Hello b : {name}</h2>
      <C name={name} setname={setname} />
    </div>
  )
}

export default B
