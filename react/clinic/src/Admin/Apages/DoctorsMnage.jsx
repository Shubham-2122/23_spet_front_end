import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import ApgeTi from '../Acoman/ApgeTi'
import axios from 'axios'

function DoctorsMnage() {

    const [doctors,setdoctors] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get("http://localhost:3000/doctors")
        setdoctors(res.data)
    }

  return (
    <div>
      <Aheader />
      <ApgeTi title="Doctors Manage" name="Doctors Manage" />

      <div className="container">
          <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">Image</th>
                               <th scope="col">type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors && doctors.map((data, index) => {
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>
                                            <img src={data.url} style={{ width: "100px",height:"100px" }} alt="" />
                                        </td>
                                           <td>{data.type}</td>
                                        <td>
                                            <button className='btn btn-info' >View</button>
                                            <button className='btn btn-success mx-2' >Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
      </div>
    </div>
  )
}

export default DoctorsMnage
