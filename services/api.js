import axios from "axios";
// import { isAuthenticated, logout } from "./auth";
import { BASE_URL } from "../constants";

const api = async (
  method,
  urlEndPoint,
  data = {},
  params = {},
  headers = {}
) => {
  try {
    const config = {
      method,
      url: BASE_URL + urlEndPoint,
      data,
      params,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };
    let response = await axios(config);

    let res = response.data;
    return res;
  } catch (error) {
    let res = error?.response ? error.response.data : error.toString();
    return res;
  }
};
export default api;
