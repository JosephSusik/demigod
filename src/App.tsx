import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import AllProducts from './pages/AllProducts';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />  
        <Route path='/about' element={<AboutPage />} />  
        <Route path='/all' element={<AllProducts />} />  
        <Route path='/contact' element={<ContactPage />} />  
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
