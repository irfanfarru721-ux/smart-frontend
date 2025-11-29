import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Modules from "./pages/Modules.jsx";
import Vendors from "./pages/Vendors.jsx";
import Products from "./pages/Products.jsx";
import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Modules />} />
        <Route path="/vendors/:moduleId" element={<Vendors />} />
        <Route path="/products/:vendorId" element={<Products />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
