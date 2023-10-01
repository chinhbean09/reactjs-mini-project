import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Hero from "./components/Hero/Hero";
import Home from "./components/Staff/Home";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import CheckBoxList from "./components/CheckBoxList/CheckBoxList";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [hamActive, setHamActive] = useState(false);
  return (
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Hero />
      <CheckBoxList />
      <Registration />
      <Login />
      <Footer/>
      <Home/>
      
      
    </div>
  );
};

export default App;