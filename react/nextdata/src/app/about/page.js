'use client';

import React, { useState } from 'react'

function page() {

    const [count,setcount]= useState(0)

  return (
    <div>
      <h1>Hello about Page</h1>
      <h1>Count : {count}</h1>
      <button className='bg-amber-200 border-2 p-2' onClick={()=>setcount(count+1)}>Increment</button>
    </div>
  )
}

export default page
