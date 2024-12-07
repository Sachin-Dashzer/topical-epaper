import './App.css'
import './index.css'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Updates from './pages/Updates/Updates';
import Contact from './pages/Contact/Contact';
const App = () => {





  useEffect(() => {
    AOS.init({
      duration: 2000, 
      offset: 100,
    });
    AOS.refresh(); 
  }, []);








  return (

    <>


      <Router>

        <Header />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />


      </Router>










    </>




  )
}

export default App