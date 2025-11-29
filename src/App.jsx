import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Modules from "./pages/Modules.jsx";
import Vendors from "./pages/Vendors.jsx";
import Products from "./pages/Products.jsx";
import Checkout from "./pages/Checkout.jsx";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* PUBLIC */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* MODULE/VENDOR/PRODUCT PAGES */}
          <Route path="/modules" element={<Modules />} />
          <Route path="/vendors/:moduleId" element={<Vendors />} />
          <Route path="/products/:vendorId" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
