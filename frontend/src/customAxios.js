import axios from "axios";
import { toast } from "react-toastify";

import { signOutWithoutDispatcher } from "./context/UserContext";

var url = process.env.REACT_BACKEND_BASE_API;
axios.defaults.baseURL = url ? url : "http://localhost:8000/api/";

const token = localStorage.getItem("id_token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.message === "Network Error") {
      console.log("There was a network error.");
    } else if ( error.response.status === 401) {
      signOutWithoutDispatcher();
    }

    return Promise.reject(error);
  }
);

export default axios;
