import React, { useEffect, useState } from "react";
import { getModules } from "../api/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const m = await getModules();
        setModules(m.data || []);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="container">
      <h1>Welcome to SmartShop</h1>

      <h2>Categories</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 12,
        }}
      >
        {modules.map((mod) => (
          <Link
            key={mod._id}
            to={`/modules/${mod._id}/vendors`}
            className="card"
          >
            <h3>{mod.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
