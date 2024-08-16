import api from "../api";
import Constants from "../constants";

// Search locations action
const getLocationsAutoComplete = async (query, limit = 5) => {
  try {
    const res = await api(
      "get",
      `${Constants.END_POINT.LOCATION_AUTOCOMPLETE}?query=${query}&limit=${limit}`
    );
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { getLocationsAutoComplete };
