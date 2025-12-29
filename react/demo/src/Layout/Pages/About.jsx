import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <Header />
        <h1 className='p-5 bg-success'>hello this About Pages</h1>

        <Link className='btn btn-info mx-2' to="/about/about1" >About 1</Link>
        <Link className='btn btn-info' to="/about/about2">About 2</Link>

        <Outlet />
      <Footer />
    </div>
  )
}

export default About
