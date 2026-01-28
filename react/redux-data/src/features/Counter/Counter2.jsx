import React from 'react'
import { useDispatch } from 'react-redux'
import { zero } from './countSlice'

function Counter2() {

    const dispatch = useDispatch()

  return (
    <div>
        <h1>Hello this Zero Funtion</h1>
      <button onClick={()=>dispatch(zero())}>Zero</button>
    </div>
  )
}

export default Counter2
