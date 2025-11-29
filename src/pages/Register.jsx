import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      alert("Registered! Please login.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create account</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="border p-2 w-full rounded" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full rounded" />
        <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" className="border p-2 w-full rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">Sign up</button>
      </form>
    </div>
  );
}
