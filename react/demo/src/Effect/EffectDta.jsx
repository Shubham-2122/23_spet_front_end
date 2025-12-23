// useEffect : function side effect 
// automatically : api show 
// compoennet re-render show
// 1) para : function : api logic 
// 2) para : optional ,array,

import React, { useEffect, useState } from 'react'

function EffectDta() {

    const [name,setname] = useState("shubham jadav")

    // useEffect(()=>{
    //     console.log("Effect without data")
    //     return(()=>{
    //         console.log("Effect with data")
    //     })
    // })

    // blank array space
    // useEffect(()=>{
    //     console.log("Effect without data")
    //     return(()=>{
    //         console.log("Effect with data")
    //     })
    // },[])

    // state /props we change data
     useEffect(()=>{
        console.log("Effect without data")
        return(()=>{
            console.log("Effect with data")
        })
    },[name])

    return (
    <div>
      <h1>hello {name}</h1>
      <button onClick={()=>setname("sujal jadav")}>Chnage name</button>
    </div>
  )
}

export default EffectDta
