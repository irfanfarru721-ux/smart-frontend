import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      window.location.href = "/";
    }
  }, [user]);

  if (!user) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <button onClick={logout} style={{ marginTop: "20px", padding: "10px 15px" }}>
        Logout
      </button>
    </div>
  );
}
