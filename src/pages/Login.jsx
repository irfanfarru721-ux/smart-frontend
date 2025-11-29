import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful");
      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="password" value={password} onChange={e=>setPassword(e.target.value)} type="password" />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}
