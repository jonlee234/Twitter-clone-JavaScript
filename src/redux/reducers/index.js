import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { listReducer } from "./userlist";
import { signupReducer } from "./signup";

export default combineReducers({
  auth: authReducer,
  users: listReducer,
  signup: signupReducer,
});
