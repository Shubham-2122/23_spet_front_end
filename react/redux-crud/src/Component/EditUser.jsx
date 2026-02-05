import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editData } from '../Slice/userSlice'

function EditUser() {

    const rediret = useNavigate()

    const { id } = useParams()
    console.log(id)

    const { users } = useSelector((state) => state.users)
    console.log(users)

    const [edited, setedited] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const dispatch = useDispatch()

    useEffect(() => {
        const singleuser = users.filter((data) => data.id === id)
        // console.log(singleuser[0])
        setedited(singleuser[0])
    }, [])

    const getchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }



    const getEdit = (e) => {
        e.preventDefault()
        dispatch(editData(edited))
        setedited({
            name: "",
            email: "",
            password: ""
        })
        rediret("/")

    }


    return (
        <div>
            <div className="container">
                <h1>Edit Data Form</h1>
                <div className="row">
                    <div className="col-6 mx-auto mt-5">
                        <form onSubmit={getEdit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Enter your name</label>
                                <input type="text" name='name' onChange={getchange} value={edited && edited.name} className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' onChange={getchange} value={edited && edited.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name='password' onChange={getchange} value={edited && edited.password} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser
