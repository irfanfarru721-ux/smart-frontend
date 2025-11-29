import axios from "axios";

export const API_BASE = "http://localhost:5000/api"; // change to your render URL if needed

const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// AUTH
export const loginUser = (data) => axiosInstance.post("/auth/login", data);
export const registerUser = (data) => axiosInstance.post("/auth/register", data);

// MODULES
export const getModules = () => axiosInstance.get("/modules");

// VENDORS
export const getVendorsByModule = (moduleId) =>
  axiosInstance.get(`/vendors/module/${moduleId}`);

// PRODUCTS
export const getProductsByVendor = (vendorId) =>
  axiosInstance.get(`/products/vendor/${vendorId}`);

export default axiosInstance;
