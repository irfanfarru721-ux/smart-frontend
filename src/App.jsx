import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Modules from "./pages/Modules.jsx";
import Vendors from "./pages/Vendors.jsx";
import Products from "./pages/Products.jsx";
import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Modules />} />
        <Route path="/vendors/:moduleId" element={<Vendors />} />
        <Route path="/products/:vendorId" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin protected page */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
