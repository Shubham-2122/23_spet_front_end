// state : it's a simple varibale 
//  we can Change a data in same File 
// Function State define and Chnage functionality
// 1) class and 2) function

import React from 'react'
import ClassSate from './ClassSate'
import FunState from './FunState'
import FunObj from './FunObj'

function MainState() {
  return (
    <div>
      <h1>hello this State componet</h1>
      {/* <ClassSate /> */}
      {/* <FunState /> */}
      <FunObj />
    </div>
  )
}

export default MainState
