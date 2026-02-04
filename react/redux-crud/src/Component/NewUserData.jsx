import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newData } from '../Slice/userSlice'
import { useNavigate } from 'react-router-dom'

function NewUserData() {
    const rediret = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch()

    const getsubmit = (e) => {
        e.preventDefault()
        dispatch(newData(form))
        setform({
            name: "",
            email: "",
            password: ""
        })
        rediret("/")
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto mt-5">
                        <form onSubmit={getsubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Enter your name</label>
                                <input type="text" onChange={getchange} name='name' value={form.name} className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' onChange={getchange} value={form.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onChange={getchange} name='password' value={form.password} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewUserData
