import React, { useReducer } from 'react'
import Header from '../Layout/Coman/Header'

const initialAgu = 0

export const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state + 1;
            break;
        case 'decrement':
            return state - 1;
            break;
        case 'Zero':
            return initialAgu;
            break;
        default:
            return state
            break;
    }
}


function Reducerda() {

    const [count,dispatch] = useReducer(reducer,initialAgu)

  return (
    <div>
      <Header />
      <h1>Reducer data</h1>
      <h1>Hello count : {count}</h1>

      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
      <button onClick={()=>dispatch('Zero')}>zero</button>
    </div>
  )
}

export default Reducerda
