import api from "../../services/api";
import { types } from "../types/types";
import Constants from "../../services/constants";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";

const jobDetails =
  (jobTitle, industry, city, region, country, page = 1, pageSize = 10) =>
  async (dispatch) => {
    dispatch(showLoaderAction());

    const res = await api(
      "get",
      `${Constants.END_POINT.JOB_SEARCH}?jobTitle=${jobTitle}&industry=${industry}&city=${city}&region=${region}&country=${country}&page=${page}&pageSize=${pageSize}`
    );
    console.log(res);
    if (res.success) {
      if (res.data) {
        dispatch({
          type: types.JOB_SEARCH,
          payload: res.data,
        });
      }
    }
    dispatch(hideLoaderAction());
  };

export { jobDetails };
