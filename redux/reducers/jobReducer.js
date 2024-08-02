import { types } from "../types/types";
const intitalState = {
  jobDetails: {
    items: [],
    pagination: {},
  },
  popularJobSearch: {},
  jobLocationsNearby: {},
};

const jobReducer = (state = intitalState, action) => {
  switch (action.type) {
    case types.JOB_SEARCH:
      return {
        ...state,
        jobDetails: {
          items: [...state.jobDetails.items, ...action.payload.items],
          pagination: action.payload.pagination,
        },
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
