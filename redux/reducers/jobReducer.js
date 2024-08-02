import { types } from "../types/types";
const intitalState = {
  jobDetails: {},
  popularJobSearch: {},
  jobLocationsNearby: {},
};

const jobReducer = (state = intitalState, action) => {
  switch (action.type) {
    case types.JOB_SEARCH:
      return {
        ...state,
        jobDetails: action.payload,
      };
    case types.POPULAR_JOB_SEARCHES:
      return {
        ...state,
        popularJobSearch: action.payload,
      };
    case types.JOB_LOCATIONS_NEARBY:
      return {
        ...state,
        jobLocationsNearby: action.payload,
      };
    default:
      return { ...state };
  }
};

export default jobReducer;
