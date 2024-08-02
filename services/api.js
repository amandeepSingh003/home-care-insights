import axios from "axios";
// import { isAuthenticated, logout } from "./auth";
import { BASE_URL } from "../constants";

const api = async (
  method,
  urlEndPoint,
  data = {},
  params = {},
  header = {}
) => {
  try {
    let headers = {
      "Content-Type": "application/json",
      ...header,
    };
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
    let res = error?.response ? error.response.data : error.toString();
    return res;
  }
};
export default api;
