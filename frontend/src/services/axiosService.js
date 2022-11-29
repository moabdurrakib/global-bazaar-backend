import axios from "axios";
import { useAuth } from "@/stores";



const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/v1",

});

axiosInstance.interceptors.request.use(
  function (config) {
    const authInfo = useAuth() 
    let auth = authInfo.user.meta ? `Bearer ${authInfo.user.meta.token}` : " ";
    config.headers.Authorization = auth;
    return config;
  },
  function (error) {
    console.log(error)
    return Promise.reject(error);
  });

export default axiosInstance;