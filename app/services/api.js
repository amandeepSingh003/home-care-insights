import axios from "axios";
// import { isAuthenticated, logout } from "./auth";
import { BASE_URL } from "../constants";

const api = async (
  method,
  urlEndPoint,
  data = {},
  params = {},
  header = "application/json"
) => {
  try {
    let headers = {
      "Content-Type": header,
    };
    // if (isAuthenticated()) {
    //   headers = {
    //     ...headers,
    //     Authorization: `Bearer ${isAuthenticated()}`,
    //   };
    // }
    let response = await axios({
      method,
      url: BASE_URL + urlEndPoint,
      data,
      headers,
      params,
    });

    let res = response.data;
    return res;
  } catch (error) {
    // if (error.response && error.response.status === 401) {
    //   logout(() => {
    //     window.location.href = "/";
    //   });
    // }
    let res = error?.response ? error.response.data : error.toString();
    return res;
  }
};
export default api;
