import React from "react";
// import Data from "./Css/Data";
// import MainProps from "./Props/MainProps";
// import MainState from "./State/MainState";
// import FormData from "./formHadling/FormData";
// import FormObj from "./formHadling/FormObj";
// import EffectDta from "./Effect/EffectDta";
// import UserData from "./Effect/UserData";
// import UserAxi from "./Effect/UserAxi";
import ProductData from "./Effect/ProductData";
import MainContext from "./Context/MainContext";
import BooK from "./Design/BooK";
import ReactBoot from "./Design/ReactBoot";
import FooterMdb from "./Design/FooterMdb";
import Login from "./Design/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
// import Hello from "./Jsx/Hello";
// import ClassCompo from "./componenet/ClassCompo";
// import FunCompo from "./componenet/FunCompo";

function App() {
    return (
        <BrowserRouter>
        <div>
            {/* <ClassCompo /> */}
            {/* <FunCompo /> */}

            {/* jsx componene */}
            {/* <Hello /> */}

            {/* css */}
            {/* <Data /> */}

            {/* props */}
            {/* <MainProps /> */}

            {/* State */}
            {/* <MainState /> */}

            {/* form data  */}
            {/* <FormData /> */}
            {/* <FormObj /> */}

            {/* Effect */}
            {/* <EffectDta /> */}
            {/* <UserData /> */}
            {/* <UserAxi /> */}

            {/* <ProductData /> */}

            {/* props context */}
            {/* <MainContext /> */}

            {/* design */}
            {/* <BooK /> */}
            {/* <ReactBoot /> */}
            {/* <Login /> */}
            {/* <FooterMdb /> */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            

        </div>
        </BrowserRouter>
    )
}
export default App;