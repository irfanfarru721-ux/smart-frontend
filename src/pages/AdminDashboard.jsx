import React, { useEffect, useState } from "react";
import axios from "../api/api"; // axios instance

export default function AdminDashboard() {
  const [modules, setModules] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("/modules").then((r) => setModules(r.data)).catch(() => {});
  }, []);

  const handleCreate = async () => {
    if (!name) return alert("Enter name");
    try {
      const res = await axios.post("/modules", { name });
      setModules((s) => [res.data, ...s]);
      setName("");
    } catch (err) {
      alert(err?.response?.data?.message || "Create failed");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="mb-4">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="New module name" className="border p-2 mr-2 rounded" />
        <button onClick={handleCreate} className="bg-blue-600 text-white px-3 py-1 rounded">Create Module</button>
      </div>

      <div className="grid gap-3">
        {modules.map((m) => (
          <div key={m._id} className="border p-3 rounded shadow">
            <div className="font-semibold">{m.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
