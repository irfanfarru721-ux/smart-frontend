import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Optional: Protected Route wrapper
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Example protected route (replace with Home later) */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <div className="container">
                  <h1>Dashboard</h1>
                  <p>Welcome, you are logged in!</p>
                </div>
              </PrivateRoute>
            }
          />

          {/* Catch-all redirect to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
