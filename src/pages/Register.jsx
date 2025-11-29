import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        name, email, password
      });

      alert("Signup successful");
      window.location.href = "/login";
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input placeholder="name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={signupHandler}>Signup</button>
    </div>
  );
}
