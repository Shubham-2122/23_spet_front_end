import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import PageTi from '../Coman/PageTi'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function EditUser() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        password: "",
        email: ""
    })

    useEffect(() => {
        fetchuser()
    }, [])

    const fetchuser = async () => {
        const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem(`Uid`)}`)
        // console.log(res.data)
        setform(res.data)
    }

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const getupdate = async (e) => {
        e.preventDefault();


        try {
            const res = await axios.put(`http://localhost:3000/users/${form.id}`, form)
            console.log(res.data)
            localStorage.setItem('Uname',res.data.name)
            redirect("/")
            setform({
                name: "",
                password: "",
                email: ""
            })
        } catch (error) {
            toast.error("Api data not Found")
        }
    }

    return (
        <div>
            <Header />
            <PageTi name="Update user" title="Edit User" />
            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <form action="" onSubmit={getupdate}>
                            <MDBRow>
                                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                    <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput value={form.name} onChange={getchange} name='name' label='Your Name' id='form1' type='text' className='w-100' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <MDBInput value={form.email} onChange={getchange} name='email' label='Your Email' id='form2' type='email' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <MDBInput value={form.password} onChange={getchange} name='password' label='Password' id='form3' type='password' />
                                    </div>


                                    <MDBBtn className='mb-4' size='lg'>Update data</MDBBtn>

                                </MDBCol>

                                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                                </MDBCol>

                            </MDBRow>
                        </form>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>

        </div>
    )
}

export default EditUser
