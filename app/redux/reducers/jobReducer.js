import { types } from "../types/types";
const intitalState = {
  jobDetails: {},
};

const jobReducer = (state = intitalState, action) => {
  switch (action.type) {
    case types.JOB_SEARCH:
      return {
        ...state,
        jobDetails: action.payload,
      };
    default:
      return { ...state };
  }
};

export default jobReducer;
