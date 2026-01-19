import React, { useEffect, useState } from "react";
import Aheader from "../Acoman/Aheader";
import ApgeTi from "../Acoman/ApgeTi";
import axios from "axios";

function DoctorsMnage() {
  const [doctors, setdoctors] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/doctors");
    setdoctors(res.data);
  };

  const [edit, setedit] = useState(null);
  const [edited, setedited] = useState({
    id: "",
    name: "",
    url: "",
    type: "",
    desc: "",
  });

  //
  const opendata = (data) => {
    console.log(data);
    setedit(data);
    setedited(data);
  };

  const getchange = (e) => {
    setedited({
      ...edited,
      [e.target.name]: e.target.value,
    });
  };

  // update
  const updatedata = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:3000/doctors/${edited.id}`,
        edited
      );
      console.log(res.data);
      setedited({
        id: "",
        name: "",
        url: "",
        type: "",
        desc: "",
      });
      setedit(null);
    } catch (error) {
      console.log("api data not Found", error);
    }
  };

  return (
    <div>
      <Aheader />
      <ApgeTi title="Doctors Manage" name="Doctors Manage" />

      <div className="container">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th scope="col">#id</th>
              <th scope="col">name</th>
              <th scope="col">Image</th>
              <th scope="col">type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors &&
              doctors.map((data, index) => {
                return (
                  <tr className="text-center" key={index}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>
                      <img
                        src={data.url}
                        style={{ width: "100px", height: "100px" }}
                        alt=""
                      />
                    </td>
                    <td>{data.type}</td>
                    <td>
                      <button className="btn btn-info">View</button>
                      <button
                        className="btn btn-success mx-2"
                        onClick={() => opendata(data)}
                      >
                        Edit
                      </button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {edit && (
          <div className="container my-5">
            <h1>hello Update Form</h1>
            <form method="post" className="php-email-form">
              <div className="row gy-4">
                <div className="col-12">
                  <input
                    type="text"
                    value={edited.name}
                    onChange={getchange}
                    name="name"
                    className="form-control"
                    placeholder="Doctors name"
                    required
                  />
                </div>
                <div className="col-12">
                  <select
                    name="type"
                    value={edited.type}
                    onChange={getchange}
                    className="form-select"
                    required
                  >
                    <option value hidden>
                      Select Doctors type
                    </option>
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
                  <input
                    type="url"
                    name="url"
                    onChange={getchange}
                    value={edited.url}
                    className="form-control"
                    placeholder="Full image"
                    required
                  />
                </div>

                <div className="col-12">
                  <textarea
                    name="desc"
                    onChange={getchange}
                    value={edited.desc}
                    className="form-control"
                    rows={4}
                    placeholder="descrition"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    onClick={updatedata}
                    className="btn btn-success"
                  >
                    Update
                  </button>
                  <button
                    type="submit"
                    onClick={() => setedit(null)}
                    className="btn btn-info mx-1"
                  >
                    cancle
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorsMnage;
