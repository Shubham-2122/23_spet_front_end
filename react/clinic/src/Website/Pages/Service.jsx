import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import PageTi from '../Coman/PageTi'
import Footer from '../Coman/Footer'
import axios from 'axios'

function Service() {

    const [service, setservice] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/services")
        console.log(res.data)
        setservice(res.data)
    }

    return (
        <div>
            <Header />
            <main className="main">
                <PageTi name="services" title="services" />
                {/* Services Section */}
                <section id="services" className="services section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            {
                                service && service.map((data, index) => {
                                    return (
                                        <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                            <div className="service-item">
                                                <div className="service-image">
                                                    <img src={data.img} alt="Cardiology Services" className="img-fluid" />
                                                    <div className="service-overlay">
                                                        <i className="fas fa-heartbeat" />
                                                    </div>
                                                </div>
                                                <div className="service-content">
                                                    <h3>{data.name}</h3>
                                                    <p>{data.desc}</p>
                                                    <div className="service-features">
                                                        <span className="feature-item"><i className="fas fa-check" /> ECG Testing</span>
                                                        <span className="feature-item"><i className="fas fa-check" /> Heart Surgery</span>
                                                    </div>
                                                    <a href="service-details.html" className="service-btn">
                                                        <span>Learn More</span>
                                                        <i className="fas fa-arrow-right" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </section>{/* /Services Section */}
            </main>

            <Footer />


        </div>
    )
}

export default Service
