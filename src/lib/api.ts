import axios from "axios";
import { API_URL } from "./constants";

const api = axios.create({
  baseURL: API_URL,
});

// Automatically attach JWT token if exists
api.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
