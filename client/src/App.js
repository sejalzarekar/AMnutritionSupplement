import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componants/Navbar';
import Home from './Componants/Home'; // Create these components
import Products from './Componants/Products';
import About from './Componants/About';
import Contact from './Componants/Contact';
import Cart from './Componants/Cart';
import Login from './Componants/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
    
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" elementt={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;