import axios from "axios";
import { useAuth } from "@/stores";


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/v1",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const authInfo = useAuth()

    const auth = authInfo.users.meta ? `Bearer ${authInfo.users.meta.token}` : "";
    console.log(auth)
    config.headers.common["Authorization"] = auth;
    return config;
  },
   function (error) {
    // Do something with request error
    console.log(error)
    return Promise.reject(error);
  });

export default axiosInstance;