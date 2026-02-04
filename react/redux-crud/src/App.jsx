import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserData from './Component/UserData'
import NewUserData from './Component/NewUserData'
import Navbar from './Component/Navbar'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<UserData />} />
        <Route path='/new' element={<NewUserData />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
