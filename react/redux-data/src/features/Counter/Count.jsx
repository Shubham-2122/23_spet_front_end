import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './countSlice'

function Count() {

    const count = useSelector((state)=>state.count.value)
    console.log(count)

    const dispatch = useDispatch()

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Count
