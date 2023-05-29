import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import AllProducts from './pages/AllProducts';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />  
        <Route path='/all' element={<AllProducts />} />  
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
