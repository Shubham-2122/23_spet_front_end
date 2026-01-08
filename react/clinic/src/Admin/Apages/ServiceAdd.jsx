import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import ApgeTi from '../Acoman/ApgeTi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ServiceAdd() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        desc: "",
        img: ""
    })

    // form hadling
    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(), //new id created
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getsubmit = async (e) => {
        //page without reshre
        e.preventDefault()

        if (form.name == "" || form.img == "" || form.desc == "") {
            console.log("pls Feild data...")
            return false;
        }

        try {

            const res = await axios.post("http://localhost:3000/services", form)
            console.log(res.data)
            setform({
                id: "",
                name: "",
                desc: "",
                img: ""
            })
            redirect("/servicemange")

        } catch (error) {
            console.log("Api data not Found..", error)
        }
    }

    return (
        <div>
            <Aheader />
            <ApgeTi title="Service Add" name="Service Add" />
            <div className="container my-5">
                <form onSubmit={getsubmit} method="post" className="php-email-form">
                    <div className="row gy-4">
                        <div className="col-12">
                            <select value={form.name} onChange={getchange} name="name" className="form-select" required>
                                <option value hidden>Select Service</option>
                                <option value="general">General Consultation</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="neurology">Neurology</option>
                                <option value="orthopedics">Orthopedics</option>
                                <option value="pediatrics">Pediatrics</option>
                                <option value="dermatology">Dermatology</option>
                                <option value="oncology">Oncology</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <input type="url" value={form.img} onChange={getchange} name="img" className="form-control" placeholder="Full image" required />
                        </div>

                        <div className="col-12">
                            <textarea name="desc" value={form.desc} onChange={getchange} className="form-control" rows={4} placeholder="descrition" defaultValue={""} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-success">Service add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ServiceAdd
