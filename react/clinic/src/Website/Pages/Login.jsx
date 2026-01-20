import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, redirect, useNavigate } from 'react-router-dom';

function Login() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Uid")){
            redirect("/")
        }
    },[])

    const [form,setform]= useState({
        email:"",
        password:""
    })

    const getchange=(e)=>{
        setform({
            ...form,
            [e.target.name] : e.target.value
        })
        console.log(form)
    }

    const getsubmit= async(e)=>{
          e.preventDefault();

          try {
            const {email,password} = form

            if(email == "" || password == ""){
                toast.error("Pls feild required..!")
                return false
            }

            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(res.data)

            if(res.data.length === 0){
                toast.error("email does not match..")
                return false
            }

            const users = res.data[0]
            // console.log(users)
            if(users.password != password){
                toast.error("Password does not match..")
                return false
            }

            if(users.status == "block"){
              toast.error("account has been block")
              return false
            }

            toast.success("login successfully")
            localStorage.setItem("Uid",users.id)
            localStorage.setItem("Uname",users.name)
            redirect("/")

          } catch (error) {
            
          }
    }

  return (
    <div>
      <MDBContainer fluid>

      <form action="">
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput name='email' value={form.email} onChange={getchange} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput name='password' value={form.password}  onChange={getchange} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn onClick={getsubmit} size='lg'>
                Login
              </MDBBtn>

              <div className='mt-3'>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/newdata" class="text- fw-bold">
                        Sign Up
                      </Link>
                    </p>
                  </div>
           

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>
      </form>

    </MDBContainer>
    </div>
  )
}

export default Login
