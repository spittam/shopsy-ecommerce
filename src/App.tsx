import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

// importing pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

// importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
      return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/shop/:category/:productID"
            element={<ProductDetail />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
