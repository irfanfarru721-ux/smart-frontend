import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = async () => {
    try {
      const res = await axios.post(
        "https://srudentbackend-1.onrender.com/api/auth/register",
        { name, email, password }
      );

      alert("Signup successful");
      window.location.href = "/login";
    } catch (error) {
      alert(error?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Signup</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />

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

      <button onClick={signupHandler}>Signup</button>
    </div>
  );
}
