import axios from "axios";

export const signup = async ({ name, email, password }) => {
  try {
    const res = await axios.post(
      "https://srudentbackend-1.onrender.com/api/auth/register",
      { name, email, password }
    );
    return res.data;
  } catch (err) {
    return { error: err?.response?.data?.message || "Registration failed" };
  }
};

export const login = async ({ email, password }) => {
  try {
    const res = await axios.post(
      "https://multi-vendor-app-ey66.onrender.com/api/auth/login",
      { email, password }
    );
    return res.data;
  } catch (err) {
    return { error: err?.response?.data?.message || "Login failed" };
  }
};
