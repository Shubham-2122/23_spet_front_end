import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Website/Pages/Home';
import About from './Website/Pages/About';
import Depart from './Website/Pages/Depart';
import Service from './Website/Pages/Service';
import Doctors from './Website/Pages/Doctors';
import DepartDetils from './Website/Pages/DepartDetils';
import ServiceDta from './Website/Pages/ServiceDta';
import Appoint from './Website/Pages/Appoint';
import Contact from './Website/Pages/Contact';
import NotFound from './Website/Pages/NotFound';
import Dashboard from './Admin/Apages/Dashboard';
import ServiceMange from './Admin/Apages/ServiceMange';
import ServiceAdd from './Admin/Apages/ServiceAdd';
import DoctorsMnage from './Admin/Apages/DoctorsMnage';
import DoctorsAdd from './Admin/Apages/DoctorsAdd';
import Alogin from './Admin/Apages/Alogin';
import { ToastContainer, toast } from 'react-toastify';
import Login from './Website/Pages/Login';
import Register from './Website/Pages/Register';
import EditUser from './Website/Pages/EditUser';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,   // animation only once
      offset: 100,
      easing: "ease-in-out",
    });

    // refresh for dynamic content
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Routes>

          {/* website */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dep' element={<Depart />} />
          <Route path='/doct' element={<Doctors />} />
          <Route path='/DepDat' element={<DepartDetils />} />
          <Route path='/service' element={<Service />} />
          <Route path='/servDat' element={<ServiceDta />} />
          <Route path='/apoint' element={<Appoint />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/newdata' element={<Register />} />
          <Route path='/editdata' element={<EditUser />} />

          <Route path='*' element={<NotFound />} />

          {/* admin */}
          <Route path='/dash' element={<Dashboard />} />
          <Route path='/servicemange' element={<ServiceMange />} />
          <Route path='/serviceadd' element={<ServiceAdd />} />
          <Route path='/doctorsmanage' element={<DoctorsMnage />} />
          <Route path='/doctoradd' element={<DoctorsAdd />} />
          <Route path='/alogin' element={<Alogin />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
