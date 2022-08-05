import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "./interceptors";

const axiosInstance = axios.create({
  baseURL: "https://gorest.co.in",
  headers: {
    "Content-type": "application/json",
    "origin-name": window.location.origin.toString(),
  },
});

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));

// Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
