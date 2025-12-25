import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildB() {

    const {form,setform} = useContext(data)

  return (
    <div>
      <h1>Hello this Child B Compo</h1>
        <h1>hello name : {form.name}</h1>
        <h1>Count : {form.count}</h1>
        <button onClick={()=>setform({...form,count:form.count+1})}>increment</button>
    </div>
  )
}

export default ChildB
