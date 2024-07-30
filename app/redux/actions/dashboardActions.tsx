import api from "../../services/api";
import { types } from "../types/types";
import Constants from "../../services/constants";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";

// Define the thunk action
const getLocationsAutoComplete =
  (query: any, limit = 5) =>
  async (dispatch: any) => {
    dispatch(showLoaderAction());

    try {
      const res = await api(
        "get",
        `${Constants.END_POINT.LOCATION_AUTOCOMPLETE}?query=${query}&limit=${limit}`
      );
      console.log(res);
      if (res.success && res.data) {
        dispatch({
          type: types.LOCATION_AUTOCOMPLETE,
          payload: res.data,
        });
      }
    } catch (error) {
      console.error("Error fetching location autocomplete:", error);
      // Handle the error accordingly
    } finally {
      dispatch(hideLoaderAction());
    }
  };

export { getLocationsAutoComplete };
