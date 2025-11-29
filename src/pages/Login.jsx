import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      const res = await axios.post(
        "https://srudentbackend-1.onrender.com/api/auth/login",
        { email, password }
      );

      // Save token
      localStorage.setItem("token", res.data.token);

      alert("Login successful");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />

      <button onClick={loginHandler}>Login</button>
    </div>
  );
}
