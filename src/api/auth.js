import axios from "axios";

export const API_URL = "https://srudentbackend-1.onrender.com/api/auth";

export const registerUser = async ({ name, email, password }) => {
  try {
    const res = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });
    return res.data;
  } catch (err) {
    return { error: err?.response?.data?.message || "Registration failed" };
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const res = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    return { error: err?.response?.data?.message || "Login failed" };
  }
};
