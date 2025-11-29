import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser(form);
      // expect { token, user } from backend
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Login failed");
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full rounded" />
        <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" className="border p-2 w-full rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">{loading ? "Logging..." : "Login"}</button>
      </form>
    </div>
  );
}
