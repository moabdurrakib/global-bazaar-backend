import axios from "axios";
import { useAuth } from "@/stores";


let axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/v1",
});
const authInfo = useAuth()
axiosInstance.defaults.headers.common['Authorization'] = authInfo.user.meta ? `Bearer ${authInfo.user.meta.token}` : "";
console.log(authInfo.user.meta.token);
// Add a request interceptor
// axiosInstance.interceptors.request.use(
//   function (config) {

//     // Do something before request is sent
//     const authInfo = useAuth()
//     console.log(authInfo.user);
//     const auth = authInfo.user.meta ? `Bearer ${authInfo.user.meta.token}` : "";
//     console.log(auth)
//     config.default.headers.common["Authorization"] = auth;
//     console.log(config);
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     console.log(error)
//     return Promise.reject(error);
//   });

export default axiosInstance;