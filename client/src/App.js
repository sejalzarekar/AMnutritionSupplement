import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componants/Navbar';
import Home from './Componants/Home'; // Create these components
import products from './Componants/products';
import About from './Componants/About';
import Contact from './Componants/Contact';
import Cart from './Componants/Cart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
    
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" elementt={<products />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
};

export default App;