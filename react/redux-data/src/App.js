import React from 'react'
import Count from './features/Counter/Count'
import Counter2 from './features/Counter/Counter2'
import Todolist from './features/Todo/Todolist'
import AddData from './features/Todo/AddData'

function App() {
  return (
    <div>
      <h1>
        Hello this Redux app
      </h1>
      {/* <Count /> */}
      {/* <Counter2 /> */}
      <AddData />
      <Todolist />
    </div>
  )
}

export default App
