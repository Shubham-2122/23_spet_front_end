import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserAxi() {

    const [data,setdata]= useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res.data)
        setdata(res.data)
    }

  return (
    <div>
      {
        console.log(data)
      }
    </div>
  )
}

export default UserAxi
