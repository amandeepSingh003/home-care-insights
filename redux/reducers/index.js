import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";

import dashboardReducer from "./dashboardReducer";
import jobReducer from "./jobReducer";

export default combineReducers({
  loader: loaderReducer,
  dashboard: dashboardReducer,
  job: jobReducer,
});
