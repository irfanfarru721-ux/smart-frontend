import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Modules from "./pages/Modules.jsx";
import Vendors from "./pages/Vendors.jsx";
import Products from "./pages/Products.jsx";
import Checkout from "./pages/Checkout.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Modules />} />
        <Route path="/vendors/:moduleId" element={<Vendors />} />
        <Route path="/products/:vendorId" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
