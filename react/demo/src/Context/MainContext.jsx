import React from 'react'
import A from './Drilling/A'
import ChildA from './UseContext/ChildA'

function MainContext() {
  return (
    <div>
      <h1>hello this Context data</h1>
      {/* drlling */}
      {/* <A /> */}

      {/* context data */}
      <ChildA />
    </div>
  )
}

export default MainContext
