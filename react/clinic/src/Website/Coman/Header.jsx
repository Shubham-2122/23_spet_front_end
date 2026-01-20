import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {

  const redirect = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem("Uid")){
      redirect("/login")
    }
  })

  const Logout=()=>{
    localStorage.removeItem("Uid")
    localStorage.removeItem("Uname")
    redirect("/login")
    toast.success("Logout Succesfully")
  }

  return (
    <div>
      <header id="header" className="header fixed-top">
        <div className="topbar d-flex align-items-center dark-background">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">contact@example.com</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+1 5589 55488 55</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#!" className="twitter">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="#!" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#!" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#!" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
        {/* End Top Bar */}
        <div className="branding d-flex align-items-cente">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              {/* Uncomment the line below if you also wish to use an image logo */}
              {/* <img src="assets/img/logo.webp" alt=""> */}
              <h1 className="sitename">Clinic</h1>
            </a>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <NavLink to="/" href="index.html">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/dep">Departments</NavLink>
                </li>
                <li>
                  <NavLink to="/service">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/doct">Doctors</NavLink>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>More Pages</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown" />
                  </a>
                  <ul>
                    <li>
                      <NavLink to="/DepDat">Department Details</NavLink>
                    </li>
                    <li>
                      <NavLink to="/servDat">Service Details</NavLink>
                    </li>
                    <li>
                      <NavLink to="/apoint">Appointment</NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLink to="/Contact">Contact</NavLink>
                </li>
                <li>
                  {
                    (()=>{
                      if(localStorage.getItem("Uid")){
                        return(
                          <Link to="/editdata">hello {localStorage.getItem("Uname")}</Link>
                        )
                      }
                    })()
                  }
                 
                </li>
                <li>
                   {
                    (()=>{
                      if(localStorage.getItem("Uid")){
                        return(
                          <Link onClick={Logout}>Logout</Link>
                        )
                      }
                      else{
                        <Link to="/login" >Login</Link>
                      }
                    })()
                  }
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list" />
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
