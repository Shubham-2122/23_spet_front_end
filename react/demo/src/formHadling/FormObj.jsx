import React, { useState } from 'react'

function FormObj() {

    const [form,setform]= useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })

    const getChange=(e)=>{
        setform({
            ...form,
            [e.target.name] : e.target.value
        })
        console.log(form)
    }
   

  return (
    <div>
        <div className="container">
            <div className="col-6 mx-auto">
                 {/* <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label" >Enter Your Name</label>
                    <input type="text" value={form.name} onChange={(e)=>setform({...form,name:e.target.value})} className="form-control" id="name"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={form.email} onChange={(e)=>setform({...form,email:e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                 <div className="mb-3">
                    <label htmlFor="phone" className="form-label" >Enter Your phone</label>
                    <input type="tel" value={form.phone} onChange={(e)=>setform({...form,phone:e.target.value})} className="form-control" id="phone"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={form.password} onChange={(e)=>setform({...form,password:e.target.value})} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}

             <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label" >Enter Your Name</label>
                    <input type="text" value={form.name} onChange={getChange} name='name' className="form-control" id="name"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={form.email} onChange={getChange} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                 <div className="mb-3">
                    <label htmlFor="phone" className="form-label" >Enter Your phone</label>
                    <input type="tel" value={form.phone} onChange={getChange} name='phone' className="form-control" id="phone"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={form.password} onChange={getChange} name='password'  className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
           </div>
    </div>
  )
}

export default FormObj
