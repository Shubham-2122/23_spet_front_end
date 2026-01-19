import React, { useEffect, useState } from "react";
import Aheader from "../Acoman/Aheader";
import ApgeTi from "../Acoman/ApgeTi";
import axios from "axios";

function ServiceMange() {
  const [service, setservice] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/services");
    // console.log(res.data)
    setservice(res.data);
  };

  const [singledata, setsingledata] = useState({
    id: "",
    name: "",
    img: "",
    desc: "",
  });

  // single service
  const singleService = async (id) => {
    const res = await axios.get(`http://localhost:3000/services/${id}`);
    console.log(res.data);
    setsingledata(res.data);
  };

  // delete service
  const deleteservice = async (id) => {
    const res = await axios.delete(`http://localhost:3000/services/${id}`);
    console.log(res.data);
    fetchdata();
  };

  // modele open
  const [edit, setedit] = useState(null);
  const [edited, seedited] = useState({
    id: "",
    name: "",
    desc: "",
    img: "",
  });

  const openModel = (data) => {
    // console.log(data)
    setedit(data);
    seedited(data);
  };
  // form handling
  const gectchnage = (e) => {
    seedited({
      ...edited,
      [e.target.name]: e.target.value,
    });
  };

  const updateData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:3000/services/${edited.id}`,
        edited
      );
      console.log(res.data);
      fetchdata();
      setedit(null);
    } catch (error) {
      console.log("Api data not Found...", error);
    }
  };

  return (
    <div>
      <Aheader />
      <ApgeTi title="Service Manage" name="Service Mange" />

      <h1 className="text-center">hello Service Manage</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th scope="col">#id</th>
              <th scope="col">name</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {service &&
              service.map((data, index) => {
                // console.log(data)
                return (
                  <tr className="text-center" key={index}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>
                      <img src={data.img} style={{ width: "100px" }} alt="" />
                    </td>
                    <td>
                      <button
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => singleService(data.id)}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-success mx-2"
                        onClick={() => openModel(data)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteservice(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {edit && (
          <div className="container my-5">
            <h1>Update Service data</h1>
            <form method="post" className="php-email-form">
              <div className="row gy-4">
                <div className="col-12">
                  <select
                    name="name"
                    value={edited.name}
                    onChange={gectchnage}
                    className="form-select"
                    required
                  >
                    <option value hidden>
                      Select Service
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
                    name="img"
                    value={edited.img}
                    onChange={gectchnage}
                    className="form-control"
                    placeholder="Full image"
                    required
                  />
                </div>

                <div className="col-12">
                  <textarea
                    name="desc"
                    value={edited.desc}
                    onChange={gectchnage}
                    className="form-control"
                    rows={4}
                    placeholder="descrition"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    onClick={updateData}
                    className="btn btn-success"
                  >
                    Service Update
                  </button>
                  <button
                    type="submit"
                    onClick={() => setedit(null)}
                    className="btn btn-info mx-2"
                  >
                    Service Cancle
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {singledata.id}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="col-12">
                  <div className="service-item">
                    <div className="service-image">
                      <img
                        src={singledata.img}
                        alt="Cardiology Services"
                        className="img-fluid"
                      />
                      <div className="service-overlay">
                        <i className="fas fa-heartbeat" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>{singledata.name}</h3>
                      <p>{singledata.desc}</p>
                      <div className="service-features">
                        <span className="feature-item">
                          <i className="fas fa-check" /> ECG Testing
                        </span>
                        <span className="feature-item">
                          <i className="fas fa-check" /> Heart Surgery
                        </span>
                      </div>
                      <a href="service-details.html" className="service-btn">
                        <span>Learn More</span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceMange;
