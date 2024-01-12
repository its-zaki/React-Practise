import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../screens/home/Home";
import About from "../../screens/about/About";
import Contact from "../../screens/contact/Contact";
import Product from "../../screens/product/Product";
import Nav from "../../components/Nav";

const Routers = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='Home' element={<Home/>} />
        <Route path='About' element={<About/>} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='Product/:id' element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
