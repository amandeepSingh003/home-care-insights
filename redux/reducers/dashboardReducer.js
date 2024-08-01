import { types } from "../types/types";
const intitalState = {
  allLocations: [],
};

const dashboardReducer = (state = intitalState, action) => {
  switch (action.type) {
    case types.LOCATION_AUTOCOMPLETE:
      return {
        ...state,
        allLocations: action.payload,
      };
    default:
      return { ...state };
  }
};

export default dashboardReducer;
