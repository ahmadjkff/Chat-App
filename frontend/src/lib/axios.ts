import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-t71z.onrender.com/api",
  withCredentials: true,
});
