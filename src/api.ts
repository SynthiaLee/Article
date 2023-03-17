import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5005/api/v1",
    
  });

  axiosInstance.interceptors.response.use((res) => {
    return new Promise(resolve => setTimeout(() => resolve(res), 1000))
  });