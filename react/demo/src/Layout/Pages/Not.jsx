import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Not() {

    // histroty
    const redirect = useNavigate()

    const backData=()=>{
        redirect("/")
    }

  return (
    <div>
      <h1 className='p-5 bg-danger text-center text-light'>Not Found Page 404</h1>
      <Link to="/" className='btn btn-info mx-1'>Back To home</Link>
      <button onClick={backData} className='btn btn-success'>Back to home</button>
    </div>
  )
}

export default Not
