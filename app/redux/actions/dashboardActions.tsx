import api from "../../services/api";
import { types } from "../types/types";
import Constants from "../../services/constants";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";

interface LocationAutoCompleteAction {
  type: typeof types.LOCATION_AUTOCOMPLETE;
  query: string;
  payload: any;
}

const getLocationsAutoComplete =
  (query, limit = 5): LocationAutoCompleteAction =>
  async (dispatch) => {
    dispatch(showLoaderAction());

    const res = await api(
      "get",
      `${Constants.END_POINT.LOCATION_AUTOCOMPLETE}?query=${query}&limit=${limit}`
    );
    console.log(res);
    if (res.success) {
      if (res.data) {
        dispatch({
          type: types.LOCATION_AUTOCOMPLETE,
          payload: res.data,
        });
      }
    }
    dispatch(hideLoaderAction());
  };

export { getLocationsAutoComplete };
