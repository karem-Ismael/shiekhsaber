import { combineReducers } from "redux";
import AuthenticationReducer from "./authentication/reducer";
import HomeReducer from "./Home/reducer"
const rootReducer = combineReducers({
  authentication: AuthenticationReducer,
  homeData:HomeReducer
});

export default rootReducer;