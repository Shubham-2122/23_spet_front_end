import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, readData } from '../Slice/userSlice'
import { Link } from 'react-router-dom'

function UserData() {

    const { users } = useSelector((state) => state.users)

    // console.log(loading)
    // console.log(users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readData())
    }, [])

    return (
        <div>
            <div className="container">
                
                <table className="table">
                    <caption>User Data Show</caption>
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users?.map((data, index) => {
                                return (
                                    <tr className='text-center' key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <Link to={`/edit/${data.id}`} className='btn btn-success mx-2'>Edit</Link>
                                            <button className='btn btn-danger' onClick={()=>dispatch(deleteData(data.id))}>Delete</button>
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

export default UserData
