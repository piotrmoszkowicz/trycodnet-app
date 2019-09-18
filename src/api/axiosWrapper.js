import axios from "axios";

const axiosWrapper = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosWrapper;
