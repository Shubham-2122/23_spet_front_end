import React, { createContext, useState } from 'react'
import ChildD from './ChildD'
import ChildB from './ChildB'

export const data = createContext()

function ChildA() {

    const [name,setname] = useState("sujal jadav")
    const [form,setform] = useState({
        name : "data",
        count : 0
    })

  return (
    <div>
      <h1>Hello this Child A component</h1>
      {/* 1) created  context 
      2) provide data 
      3) useConetxt :access context */}
      <h1>Hello A : {name}</h1>

        <data.Provider value={{name,setname,form,setform}}>
            <ChildB />
            <ChildD />
        </data.Provider>

    </div>
  )
}

export default ChildA
