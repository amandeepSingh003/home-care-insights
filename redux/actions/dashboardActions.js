import api from "../../services/api";
import { types } from "../types/types";
import Constants from "../../services/constants";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";

const getLocationsAutoComplete =
  (query, limit = 5) =>
  async (dispatch) => {
    dispatch(showLoaderAction());

    try {
      const res = await api(
        "get",
        `${Constants.END_POINT.LOCATION_AUTOCOMPLETE}?query=${query}&limit=${limit}`
      );
      dispatch({
        type: types.LOCATION_AUTOCOMPLETE,
        payload: res,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error accordingly
    } finally {
      dispatch(hideLoaderAction());
    }
  };

export { getLocationsAutoComplete };
