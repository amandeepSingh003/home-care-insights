import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";

import dashboardReducer from "./dashboardReducer";
import jobReducer from "./jobReducer";
import otherReducer from "./otherReducer";

export default combineReducers({
  loader: loaderReducer,
  dashboard: dashboardReducer,
  job: jobReducer,
  otherReducer: otherReducer,
});
