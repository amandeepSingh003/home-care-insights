import { types } from "../types/types";
const intitalState = {
  faqData: {},
};

const otherReducer = (state = intitalState, action) => {
  switch (action.type) {
    case types.FAQ:
      return {
        ...state,
        faqData: action.payload,
      };
    default:
      return { ...state };
  }
};

export default otherReducer;
